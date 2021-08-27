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
        phoneNumber
        city
        country
        bio
        imageUrl
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
      time
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

export const USERS = gql`
  query Query {
    users {
      id
      type
      fullName
      email
      phoneNumber
      street
      postcode
      city
      country
      imageUrl
      bio
    }
  }
`;

export const USER = gql`
  query Query($userId: ID!) {
    user(id: $userId) {
      id
      type
      fullName
      email
      phoneNumber
      street
      postcode
      city
      country
      imageUrl
      bio
    }
  }
`;
