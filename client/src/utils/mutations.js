import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const USER_BY_ID = gql`
mutation userById($userId: String!) {
    userById(id: $userId) {
       user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!,
    $handicap: String!, $motorPreference: String!, $smoke: String!,
    $buddyMotorPreference: String!, $buddySmokingPreference: String!) {
    addUser(username: $username, email: $email, password: $password,
      handicap: $handicap, motorPreference: $motorPreference,
      smoke: $smoke, buddyMotorPreference: $buddyMotorPreference,
      buddySmokingPreference: $buddySmokingPreference) {
      token
      user {
        _id
        username
        email
        handicap
        motorPreference
        smoke
        buddyMotorPreference
        buddySmokingPreference
        buddies {
          _id
        }
      }
    }
  }
`;

export const SAVE_BUDDY = gql`
  mutation saveBuddy($buddyId: ID!) {
    saveBuddy(buddyId: $buddyId) {
      buddies {
        buddyId
      }
    }
  }
`;

export const REMOVE_BUDDY = gql`
  mutation removeBuddy($buddyId: ID!) {
    removeBuddy(buddyId: $buddyId) {
      buddies {
        buddyId
      }
    }
  }
`;
