const mongoose = require("mongoose")

const Question = require("../models/Question")

const questionResolvers = {
  Query: {
    questions: () => Question.find({})
  },
  Mutation: {
    addQuestion: (parent, question) => {
      const newQuestion = new Question({
        author: question.author,
        timestamp: Date.now().toString(),
        optionOne: {
          votes: [],
          text: question.optionOneText
        },
        optionTwo: {
          votes: [],
          text: question.optionTwoText
        }
      })
      return newQuestion.save()
    },
    saveAnswer: async (parent, answer) => {
      let questionToUpdate = await Question.findOne({
        _id: mongoose.Types.ObjectId(answer.questionId)
      })
      // TODO: First check if user's vote exists (each user gets 1 vote only)
      questionToUpdate[answer.option].votes.push(answer.userName)
      return questionToUpdate.save()
    }
  }
}

module.exports = questionResolvers
