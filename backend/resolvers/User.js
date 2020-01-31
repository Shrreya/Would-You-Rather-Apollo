const User = require("../models/User")

const userResolvers = {
  Query: {
    users: () => User.find({})
  },
  Mutation: {
    addUser: (parent, user) => {
      const newUser = new User({
        userName: user.userName,
        firstName: user.firstName,
        lastName: user.lastName
      })
      return newUser.save()
    }
  }
}

module.exports = userResolvers
