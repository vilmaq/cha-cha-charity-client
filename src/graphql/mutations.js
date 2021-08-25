import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Mutation($loginInput: LoginInput!) {
    login(input: $loginInput) {
      token
      user {
        id
        email
        password
      }
    }
  }
`;

export const SIGNUP = gql`
  mutation Mutation($signUpInput: SignUpInput!) {
    signUp(input: $signUpInput) {
      token
      user {
        type
        id
        fullName
        password
        email
        phoneNumber
        street
        postcode
        city
        country
        imageUrl
        bio
        animals
        environmental
        international
        health
        education
        artCulture
      }
    }
  }
`;

export const SIGNUPTOEVENT = gql`
  mutation Mutation($userId: ID!, $eventId: ID!) {
    signUpToEvent(userId: $userId, eventId: $eventId) {
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
  }
`;

export const CREATEEVENT = gql`
  mutation Mutation($eventInput: EventInput!, $userId: ID!) {
    createEvent(input: $eventInput, userId: $userId) {
      events {
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
        }
        imageUrl
      }
    }
  }
`;

export const UPLOADIMAGE = gql`
  mutation Mutation($imageUploadInput: Image) {
    imageUpload(input: $imageUploadInput)
  }
  # mutation Mutation($input: Image) {
  #   uploadImage(imageUploadInput: $input) {
  #     name
  #   }
  # }
`;
