import { Schema, model } from "mongoose"

const optionModel = new Schema({
  votes: {
    type: [String],
    required: true
  },
  text: {
    type: String,
    required: true
  }
})

const questionModel = new Schema({
  author: {
    type: String,
    index: true,
    required: true
  },
  timestamp: {
    type: String,
    required: true
  },
  optionOne: {
    type: optionModel,
    required: true
  },
  optionTwo: {
    type: optionModel,
    required: true
  }
})

const Question = model("question", questionModel)

export default Question
