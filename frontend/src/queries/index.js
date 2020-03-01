import { gql } from "apollo-boost"

const GET_USERS = gql`
  query getUsers {
    getUsers {
      id
      username
      password
      email
      firstName
      lastName
    }
  }
`

const GET_USER = gql`
  query getUser($userId: ID!) {
    getUser(userId: $userId) {
      id
      username
      password
      email
      firstName
      lastName
    }
  }
`

const LOGIN_USER = gql`
  mutation loginUser($username: String!, $password: String!) {
    loginUser(username: $username, password: $password) {
      token
    }
  }
`

const REGISTER_USER = gql`
  mutation addUser(
    $username: String!
    $password: String!
    $email: String!
    $firstName: String!
    $lastName: String!
  ) {
    addUser(
      username: $username
      password: $password
      email: $email
      firstName: $firstName
      lastName: $lastName
    ) {
      id
      username
      password
      email
      firstName
      lastName
    }
  }
`

const EDIT_USER = gql`
  mutation editUser(
    $userId: ID!
    $username: String!
    $password: String!
    $email: String!
  ) {
    editUser(
      userId: $userId
      username: $username
      password: $password
      email: $email
    ) {
      id
      username
      password
      email
      firstName
      lastName
    }
  }
`

const DELETE_USER = gql`
  mutation deleteUser($userId: ID!) {
    deleteUser(userId: $userId) {
      id
      username
      password
      email
      firstName
      lastName
    }
  }
`

export {
  GET_USERS,
  GET_USER,
  LOGIN_USER,
  REGISTER_USER,
  EDIT_USER,
  DELETE_USER
}
