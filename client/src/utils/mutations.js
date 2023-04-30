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
        
      }
    }
  }
`;

export const SAVE_BUDDY = gql`
  mutation saveBuddy($buddyEmail: String!) {
    saveBuddy(buddyEmail: $buddyEmail) {
      buddies 
    }
  }
`;

export const REMOVE_BUDDY = gql`
  mutation removeBuddy($buddyEmail: String!) {
    removeBuddy(buddyEmail: $buddyEmail) {
      buddies 
    }
  }
`;
