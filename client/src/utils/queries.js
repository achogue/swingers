import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      buddies 
    }
  }
`;


export const QUERY_USER_BY_ID = gql`
  query User($id: ID!) {
    getUser(id: $id){
        _id
        username
        email
      }
  }
`;

export const QUERY_USER_BY_EMAIL = gql`
  query getUserByEmail($email: String!) {
    getUserByEmail(email: $email){
        _id
        username
        email
      }
  }
`;


export const QUERY_USERS = gql`
  query getUsers  {
    getUsers {
      _id
      username
      email
      password
      handicap
      motorPreference
      smoke
      buddyMotorPreference
      buddySmokingPreference
      buddyCount
      buddies
    }
  }
`;

