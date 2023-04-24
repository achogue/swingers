const { User, Buddy } = require('../models');
//  user behavior
const userController = {
    getAllUser(req, res) {
        User.find({}).select('-__v').sort({ _id: 0 })
        .then(userData => res.json(userData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
    },

    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
		.populate({path: 'buddies', select: '-__v'})
        .then(userData => {
            if (!userData) {
                res.status(404).json({ message: 'No User found' });
                return;
            }
            res.json(userData);
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
    },

    createUser({ body }, res) {
        User.create(body)
        .then(userData => res.json(userData))
        .catch(err => res.json(err));
    },

    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
        .then(userData => {
            if (!userData) {
                res.status(404).json({ message: 'No User found' });
                return;
            }
            res.json(userData);
        })
        .catch(err => res.json(err));
    },

    deleteUser({ params }, res) {           
       User.findOneAndDelete({ userId: params.id })
            .then(userData => {
                if (!userData) {
                res.status(404).json({ message: 'No User found' });
                return;
            }
            res.json(userData);
        })
        .catch(err => res.json(err));
    },

    // addBuddy({ params }, res) {
        // User.findOneAndUpdate({ _id: params.userId }, { $push: { buddies: params.buddyId } }, { new: true })
        // .then((userData) => {
            // if (!userData) {
                // res.status(404).json({ message: 'No user found' });
                // return;
            // }
            // res.json(userData);
        // })
        // .catch((err) => res.status(400).json(err));
    // },

    // deleteBuddy({ params }, res) {
        // User.findOneAndUpdate({ _id: params.userId }, { $pull: { friends: params.buddyId } }, { new: true })
        // .then((userData) => {
            // if (!userData) {
                // res.status(404).json({ message: 'No user found' });
                // return;
            // }
            // res.json(userData);
        // })
        // .catch((err) => res.status(400).json(err));
    // }
};

module.exports = userController