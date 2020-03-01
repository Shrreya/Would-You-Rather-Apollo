import { UserInputError } from "apollo-server-express"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

import User from "../models/User"
const checkAuth = require("../helper/context/index")

const createToken = (user, secret, expiresIn) => {
  return jwt.sign({ username: user.username, email: user.email }, secret, {
    expiresIn
  })
}

const Query = {
  getUsers: async () => {
    try {
      const allUsers = await User.find({})
      return allUsers
    } catch (err) {
      throw new Error(err)
    }
  },
  getUser: async (parent, user, verifyJWT) => {
    const checkAuthContext = checkAuth(verifyJWT)
    console.log("checkAuthContext", checkAuthContext)
    try {
      const oneUser = await User.findById(user.userId)
      if (oneUser) {
        return oneUser
      } else if (!oneUser) {
        throw new Error("User not found")
      }
    } catch (err) {
      throw new Error(err)
    }
  }
}

const Mutation = {
  loginUser: async (parent, user) => {
    try {
      const userExists = await User.findOne({ username: user.username })
      if (!userExists) {
        throw new UserInputError("Username not found", {
          error: {
            Username: "A user with that username could not be found!"
          }
        })
      }

      const isValidPassword = await bcrypt.compare(
        user.password,
        userExists.password
      )

      if (isValidPassword) {
        console.log("User Info:", user)
        console.log("userExists Info:", userExists)
      } else if (!isValidPassword) {
        throw new Error("Invalid Password")
      }

      return {
        token: createToken([userExists], process.env.SECRET, "10m")
      }
    } catch (error) {
      console.log(error)
      throw error
    }
  },
  addUser: async (parent, user) => {
    try {
      const userExists = await User.findOne({ username: user.username })
      if (userExists) {
        throw new UserInputError("Username is taken", {
          error: {
            Username: "This username has already been taken"
          }
        })
      }

      const emailExists = await User.findOne({ email: user.email })
      if (emailExists) {
        throw new UserInputError("Email is taken", {
          error: {
            Email: "This email has already been taken"
          }
        })
      }

      console.log("New User", user)

      const bcryptPassword = await bcrypt.hash(user.password, 12)

      const newUser = await new User({
        username: user.username,
        password: bcryptPassword,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName
      }).save()

      console.log("newUser here:", newUser)

      return {
        token: createToken(newUser, process.env.SECRET, "10m")
      }
    } catch (error) {
      console.log(error)
      throw error
    }
  },
  editUser: async (parent, user) => {
    try {
      const userExists = await User.findById(user.userId)
      if (!userExists) {
        throw new UserInputError("A user with that ID could not be found", {
          error: {
            ID: "A user with that ID could not be found"
          }
        })
      }

      const bcryptPassword = await bcrypt.hash(user.password, 12)

      const updatedUser = await User.findByIdAndUpdate(user.userId, {
        username: user.username,
        password: bcryptPassword,
        email: user.email
      })

      // Need .save()?

      console.log("the user", user)

      return {
        ...updatedUser._doc,
        id: updatedUser._id
      }
    } catch (error) {
      console.log(error)
      throw error
    }
  },
  deleteUser: async (parent, user) => {
    try {
      const userExists = await User.findById(user.userId)
      console.log(userExists)
      if (!userExists) {
        throw new UserInputError("A user with that ID could not be found", {
          error: {
            ID: "A user with that ID could not be found"
          }
        })
      }

      const deletedUser = await User.findByIdAndRemove(user.userId)

      return {
        ...deletedUser._doc,
        id: deletedUser._id
      }
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}

const userResolvers = {
  Query,
  Mutation
}

export default userResolvers
