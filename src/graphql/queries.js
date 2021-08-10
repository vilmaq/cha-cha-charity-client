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
      creator
      imageUrl
      participants {
        id
        type
        name
        last_name
        password
        email
      }
    }
  }
`;

export const MyEvents = gql`{
  query Query($eventsUserId:ID){
    events(userId:$eventsUserId){
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
      imageUrl
      participants {
        id
        type
        name
        last_name
        password
        email
      }
    }
    }
  }
}`;

export const EVENT = gql`{
  query Query($eventId:ID!){
    event(id: $eventId){
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
      imageUrl
      participants {
        id
        type
        name
        last_name
        password
        email
    }

    }
  }
}`;
