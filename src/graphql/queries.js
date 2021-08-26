import { gql } from "@apollo/client";

export const EVENTS = gql`
  query Query($eventsCreatorId: ID, $eventsCategory: String!) {
    events(creatorId: $eventsCreatorId, category: $eventsCategory) {
      id
      type
      name
      description
      day
      time
      street
      postcode
      city
      country
      organizer
      creator {
        id
        type
        fullName
        email
      }
      imageUrl
      participants {
        id
        type
        fullName
        email
      }
    }
  }
`;

export const MY_EVENTS = gql`
  query Query($eventsCreatorId: ID, $eventsCategory: String!) {
    events(creatorId: $eventsCreatorId, category: $eventsCategory) {
      id
      type
      name
      description
      day
      time
      street
      postcode
      city
      country
      organizer
      creator {
        id
        type
        fullName
        email
      }
      imageUrl
      participants {
        id
        type
        fullName
        email
      }
    }
  }
`;

export const EVENT = gql`
  query Query($eventId: ID!) {
    event(id: $eventId) {
      id
      type
      name
      description
      day
      street
      postcode
      city
      country
      organizer
      creator {
        id
        fullName
        email
        phoneNumber
        type
        bio
        country
        imageUrl
      }
      imageUrl
      participants {
        id
        fullName
      }
    }
  }
`;

//original EVENT query
// export const EVENT = gql`
//   query Query($id: ID!) {
//     event(id: id) {
//       id
//       type
//       name
//       description
//       day
//       street
//       postcode
//       city
//       country
//       organizer
//       creator {
//         id
//         type
//         name
//         fullName
//         password
//         email
//       }
//       imageUrl
//       participants {
//         id
//         type
//         name
//         fullName
//         password
//         email
//       }
//     }
//   }
// `;
