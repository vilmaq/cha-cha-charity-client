# Cha Cha Charity

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

- [Cha Cha Charity](#cha-cha-charity)
  - [Project link](#project-link)
  - [Table of Contents](#table-of-contents)
  - [Link to deployed react app](#link-to-deployed-react-app)
  - [Getting started](#getting-started)
  - [About](#about)
  - [Technology/Framework used](#technologyframework-used)
  - [Running the project](#running-the-project)
  - [Variables](#variables)
  - [Mutations](#mutations)
  - [Project Documentation](#project-documentation)
  - [Objectives](#objectives)
  - [Getting started](#getting-started-1)
  - [Project Charter](#project-charter)
  - [User Journey](#user-journey)
  - [Project Retrospective](#project-retrospective)
  - [Improvements to be made](#improvements-to-be-made)
  - [Results](#results)

## Link to deployed react app

## Getting started

```
$ git clone https://github.com/vilmaq/cha-cha-charity
$ cd cha-cha-charity
$ npm i

$ git clone https://github.com/vilmaq/cha-cha-charity-client
$ cd cha-cha-charity-client
$ npm i

```

## About

- Cha-Cha-Charity is an application which helps to connect and bring together everyone in multiple events.
- This is a website on which any user, any company or any charity organization could come and enter the details of any event or participate in any event.

- Homepage - Whenever anyone comes to the homepage, they could see the categories with a button "Learn More". As per their choice, they could click on the button of the category of their choice and they will be moved to the next page where various events related to that category will be rendered.

![image](./public/assets/images/homepage-cha.png)

- Events page - On this page, anyone could see the various events related to the category clicked.
- Category - In the navbar, you could see a button named category. If you click on that, then it shows a dropdown list of various categories. You just need to click on any category and it will show the events related to that category.
- See More - If any user clicks on the see more button, they will move to a new page where they could see full details related to that category.
- Sign up - If anyone clicks on sign up button,they will be moved to the sign up page.
- Event Detail Page - On this page, anyone could see the day, date and time about the event and they could register for the same by clicking on the sign up button on that page.
- Sign up page - If anyone comes to this page, they have to enter the personal/official details and also the categories about which they want to get information.

![image](./public/assets/images/signup-cha.png)

- Login page - After sign up, user comes to the login page where they just have to enter their username and password and click on login button.

![image](./public/assets/images/login-cha.png)

- Dashboard - Whenever user is logged in, they reach dashboard page where they could see create event button and various events for which they have shown their interest.
- Any user could enjoy adding on events to their homepage and they could create multiple events. If there us a charity company or an organization who wants to organize and event and see how many participants are there. It will be easy for them through this website.

![image](./public/assets/images/dashboard-cha.png)

## Technology/Framework used

- React
- Apollo GraphQL
- Material UI
- React Bootstrap
- React Router Dom
- React Hooks
- React AWS
- Apollo Express

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

## Project Documentation

Cha-Cha-Charity is an interesting and connecting website.

- Cha-Cha-Charity is an application which connects everyone together. Any volunteer, charity organization or any company could come on our website and save the events in which they are interested. They could save selected events in their homepage and view the details at any point of time.
- Anyone could create events and see the day and date of that event and also the participants.

## Objectives

- Interesting create event with day and date.
- Allow user to save their events for future.
- Enhance user experience by adding and saving multiple events .

## Getting started

We started with the project with the following steps:

```
$ cd client
$ npm i
$ npm run start

$ cd server
$ npm i
$ npm run dev

```

## Project Charter

Cha-Cha-Charity is a wonderful website which brings everyone together. It gives an exposure to every individual and of any age.

**Key requirement** - tasks, roles and responsibilities were allotted at the starting of the project.

**We used:**

- React
- Apollo GraphQL
- Material UI
- React Bootstrap
- React Router Dom
- React Hooks
- React AWS
- Apollo Express

## User Journey

**Make a search** - User could use this website easily on his mobile, tablet or computer and play a quiz according to their interest.

**Create Quizzes** - User could move to the dashboard and create quizzes by either using the API or by writing the questions.

**Playing Quizzes** - User could click on the play button and he will be moved to the question's page where he could see the timer for the quiz.

**Remove created quiz** - User could easily remove a quiz by clicking on "Delete" button.

## Project Retrospective

- Tri-via-hub is a wonderful platform which helps people learn more.
- It is an interactive app which increases the knowledge and creates interest in various fields.
- It depends on the interests and various activities which everyone used to do.-

## Improvements to be made

This project could be improved by adding

- Rating of every quiz
- Connect with other users.
- API accessibility

**Lessons learnt**

We learned about various things:

- Related to API - We looked into influence of an API on the project.
- Stringify the answers in database as they were stored in an array.
- Some features had to be cut due to time frame.

**Timeline**
Every task was given a limited time and whole team has been into the project. So, everyone completed the task and helped each other in a great manner.

## Results

**Objectives were achieved as below:**

- Our website instantly grabs user towards various quizzes related to various streams.

- It adds the cards to dashboard page after completing the quiz.

- It removes a quiz easily from dashboard page by clicking on "Delete" button easily.

- It shows created quiz and played quizzes on the same page.

- It easily comes back to the home page.

- It easily allows to sign up and logout.
