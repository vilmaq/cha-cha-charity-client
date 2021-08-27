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
  mutation Mutation($signUpToEventUserId: ID!, $signUpToEventEventId: ID!) {
    signUpToEvent(
      userId: $signUpToEventUserId
      eventId: $signUpToEventEventId
    ) {
      id
      participants {
        type
        id
        fullName
        email
      }
      name
      type
    }
  }
`;

export const CREATEEVENT = gql`
  mutation Mutation($eventInput: EventInput!) {
    createEvent(input: $eventInput) {
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
      }
      imageUrl
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
