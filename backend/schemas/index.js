const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID,
        userName: String!,
        firstName: String!,
        lastName: String!
    },
    type Question {
        _id: ID,
        author: String!,
        timestamp: String!,
        optionOne: Option,
        optionTwo: Option
    },
    type Option {
        votes: [String],
        text: String!
    }
    type Query {
        users: [User],
        questions: [Question]
    },
    type Mutation {
        addUser(userName: String!, firstName: String!, lastName: String!): User,
        addQuestion(author: String!, optionOneText: String!, optionTwoText: String!): Question,
        saveAnswer(questionId: String!, userName: String!, option: String!): Question
    }
`

module.exports = typeDefs