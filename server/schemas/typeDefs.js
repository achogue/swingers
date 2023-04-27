const { gql } = require("apollo-server-express");

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
    buddies: [User]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    user(id: ID!): User
    getUsers: [User]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(
      username: String!
      email: String!
      password: String!
      handicap: String!
      motorPreference: String!
      smoke: String!
      buddyMotorPreference: String!
      buddySmokingPreference: String!
    ): Auth
    saveBuddy(buddyId: ID!): User
    removeBuddy(buddyId: ID!): User
  }
`;

module.exports = typeDefs;
