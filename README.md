# Cha cha charity

- Cha-Cha-Charity is an application which connects everyone together.
- Any volunteer, charity organization or any company could come on our website and click on any charity and they will be shown the related events.
- Anyone could see more information related to the events and then sign up for the same, if they are interested in the same.

## Project link

Click [here]() to view the project on Heroku.

**Contributors**

- Vilma: [Github](https://github.com/vilmaq)

- Otilia [Github](https://github.com/otivisan22)

- Nazim: [Github](https://github.com/MRasheed1991)

- Nazia: [Github](https://github.com/Nrasool21)

- Misha [Github](https://github.com/misha244)
  <br>
- Marcus [Github](https://github.com/marcuslau0903)

- Eti Priya: [Github](https://github.com/Etipriya)

## Table of Contents

- [Cha cha charity](#cha-cha-charity)
  - [Project link](#project-link)
  - [Table of Contents](#table-of-contents)
  - [Getting started](#getting-started)
  - [About](#about)
  - [Technology/Framework used](#technologyframework-used)
  - [Link to deploy react app](#link-to-deploy-react-app)
  - [Running the project](#running-the-project)
  - [Variables](#variables)
  - [Mutations](#mutations)
  - [Screenshots](#screenshots)

## Getting started

```
$ git clone https://github.com/vilmaq/cha-cha-charity-client
$ cd cha-cha-charity-client
$ cd client
$ npm i
$ cd server
$ npm i

```

## About

- Cha-Cha-Charity is an application which helps to connect and bring together everyone in multiple events.
- This is a website on which any user, any company or any charity organization could come and enter the details of any event or participate in any event.

- Homepage - Whenever anyone comes to the homepage, they could see the categories with a button "Learn More". As per their choice, they could click on the button of the category of their choice and they will be moved to the next page where various events related to that category will be rendered.
- Events page - On this page, anyone could see the various events related to the category clicked.
- Category - In the navbar, you could see a button named category. If you click on that, then it shows a dropdown list of various categories. You just need to click on any category and it will show the events related to that category.
-

![image](./public/assets/images/create-quiz.png)

## Technology/Framework used

- React
- Apollo GraphQL
- Material UI
- React Bootstrap

## Link to deploy react app

## Running the project

```
$ cd client
$ npm i
$ npm run start

$ cd server
$ npm i
$ npm run dev

```

## Variables

```
{
  "loginInput": {
    "email": "alex.pink@gmail.com",
    "password": "password555"
  },
"signUpInput": {
    "type": "Volunteer",
    "fullName": "Sarah James",
    "password": "password222",
    "email": "sarah.james@gmail.com",
    "phoneNumber": "07796342221",
    "street": "New Street",
    "postcode": "B18 NN",
    "city": "Birmingham",
    "country": "UK"
  },
   "createEventInput": {
    "name": "test",
    "type": "animal",
    "description": "test",
    "day": "2012-02-02",
    "street": "test",
    "postcode": "test",
    "city": "test",
    "country": "test",
    "organizer": "test",
    "creator": "6116bb9faa6c99e1209ac537",
    "user": "61253fb81dd188d6b6950cdd",
    "imageUrl": "test"
  }
  "updateEventInput": {
    "eventId": "612556204c0ea163708a812f",
    "name": "Arizona Poised to Permit Canyon Uranium Mine",
    "description": "An unnecessary uranium mine near the Grand Canyon poses a threat to fragile water resources and shouldn’t be allowed to continue",
    "street": "New Street",
    "postcode": "B2 3DF",


  }
}


```

## Mutations

```
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

```

```
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

```

```
mutation Mutation($updateEventInput: UpdateEvent!) {
  updateEvent(input: $updateEventInput) {
    id
    name
    description
    postcode
    street
    }
  }
}

```

## Screenshots
