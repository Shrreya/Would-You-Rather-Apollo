# Would-You-Rather-Apollo

Using React + Apollo + GraphQL with MongoDB as database to build a web app that lets a user play the “Would You Rather?” game.<br /><br />
The game goes like this: A user is asked a question in the form: “Would you rather [option A] or [option B] ?”. Answering "neither" or "both" is against the rules. In the app, users will be able to answer questions, see which questions they haven’t answered, see how other people have voted, post questions, and see the ranking of users on the leaderboard.

## Backend-Server

To get started:
* Make sure MongoDB is running locally
* Switch to the backend: `cd backend`
* Install dependencies: `npm i`
* Start the server: `npm run server`
* Access GraphQL playground: http://localhost:8000/graphql

## Frontend-Client

To get started:
* Switch to the frontend: `cd frontend`
* Install dependencies: `yarn install`
* Start the client: `yarn start`
* Access the application: http://localhost:3000/
