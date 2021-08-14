import { gql } from "@apollo/client";

export const EVENTS = gql`
  query Query {
    events {
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
        type
        fullName
        password
        email
      }
      imageUrl
      participants {
        id
        type
        fullName
        password
        email
      }
    }
  }
`;

export const MyEvents = gql`
  query Query($userId: ID) {
    events(userId: $userId) {
      events {
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
        creator
        creator {
          id
          type
          fullName
          password
          email
        }
        imageUrl
        participants {
          id
          type
          fullName
          password
          email
        }
      }
    }
  }
`;

export const EVENT = gql`
  query Query($id: ID!) {
    event(id: id) {
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
        type
        name
        fullName
        password
        email
      }
      imageUrl
      participants {
        id
        type
        name
        fullName
        password
        email
      }
    }
  }
`;
