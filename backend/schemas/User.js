const { gql } = require('apollo-server-express');

const userSchema = gql`
    type User {
        _id: ID,
        userName: String,
        firstName: String,
        lastName: String
    },
    type Query {
        users: [User]
    },
    type Mutation {
        addUser(userName: String!, firstName: String!, lastName: String!): User,
    }
`

module.exports = userSchema;