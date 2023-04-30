const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {

        const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');
        console.log(`me ${userData}`);
        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
   
    getUser: async (parent, args) => {
        console.log("get user");
        let _idObject = ObjectId(args.id)
        //const userData = await User.findById(args.id);
        return await User.findById(args.id);
    },
  
    getUserByEmail: async (parent, args) => {
        console.log("get user by email");
        return await User.findOne({email: args.email});
    },

    getUsers: async (parent, args) => {
      console.log("get users");
        return await User.find();
      
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },

    

    saveBuddy: async (parent, { buddyEmail }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { buddies: buddyEmail } },
          { new: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    },

    removeBuddy: async (parent, { buddyEmail }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { buddies: buddyEmail  } },
          { new: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
