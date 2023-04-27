const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    handicap: String!
    motorPreference: String!
    smoke: String!
    buddyMotorPreference: String!
    buddySmokingPreference: String!
    buddyCount: Int
    buddies: [String!]
  }

  type Auth {
    token: ID!
    user: User
  }
   
  type Query {
    me: User
    getUser(getUserId: ID!): User
    getUserByEmail(email: String!): User
    getUsers: [User]

  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!, 
     handicap: String!,
      motorPreference: String!,
      smoke: String!,
      buddyMotorPreference: String!,
      buddySmokingPreference: String!
  ): Auth
    saveBuddy(buddyEmail: String!): User
    removeBuddy(buddyEmail: String!): User
  }
`;

module.exports = typeDefs;
