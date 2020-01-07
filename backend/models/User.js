const { Schema, model } = require('mongoose')

const userSchema = new Schema({
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

const User = model('user', userSchema)

module.exports = User