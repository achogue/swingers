import { gql } from '@apollo/client';


export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      buddies {
        _Id
      }
    }
  }
`;


// export const QUERY_USER_BY_ID = gql`
//   query getUserById($userId: String!) {
//     getUserById(userId: $userId) {
//        User {
//         _id
//         username
//         email
//       }
//     }
//   }
// `;
export const QUERY_USER_BY_ID = gql`
  query User($id: ID!) {
    user(id: $id){
        _id
        username
        email
      }
  }
`;

// user {
//   _id
//   username
// }

// query Dog($breed: String!) {
//   dog(breed: $breed) {
//     id
//     displayImage
//   }
// }

// query {
//   author {
//     id
//     name
//   }
// }


// export const QUERY_USER_BY_ID = gql`
// query find($userId: ID!)  {
//   user {
//     _id
//     username
//     email
//     handicap
//     motorPreference
//     smoke
//     buddyMotorPreference
//     buddySmokingPreference
//   }
// }
// `;

 export const QUERY_USERS = gql`
query getUsers  {
  users user
}
`;

