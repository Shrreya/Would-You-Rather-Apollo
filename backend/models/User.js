const { Schema, model } = require('mongoose')

const userModel = new Schema({
    userName: {
        type: String,
        unique: true,
        index: true,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
})

const User = model('user', userModel)

module.exports = User