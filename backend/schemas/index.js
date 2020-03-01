import { gql } from "apollo-server-express"

// Why _id and not id?

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    password: String!
    email: String!
    firstName: String!
    lastName: String!
  }

  type Question {
    id: ID
    author: String!
    timestamp: String!
    optionOne: Option
    optionTwo: Option
  }

  type Option {
    votes: [String]
    text: String!
  }

  type Query {
    getUsers: [User]
    getUser(userId: ID!): User
    getQuestions: [Question]
  }

  type Token {
    token: String!
  }

  type Mutation {
    loginUser(username: String!, password: String!): Token
    editUser(
      userId: ID!
      username: String
      password: String
      email: String
    ): User
    deleteUser(userId: ID!): User
    addUser(
      username: String!
      password: String!
      email: String!
      firstName: String!
      lastName: String!
    ): User
    addQuestion(
      author: String!
      optionOneText: String!
      optionTwoText: String!
    ): Question
    saveAnswer(
      questionId: String!
      username: String!
      option: String!
    ): Question
  }
`

export default typeDefs
