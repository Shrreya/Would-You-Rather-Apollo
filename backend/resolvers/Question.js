import mongoose from "mongoose"

import Question from "../models/Question"

const questionResolvers = {
  Query: {
    getQuestions: () => Question.find({})
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
      questionToUpdate[answer.option].votes.push(answer.username)
      return questionToUpdate.save()
    }
  }
}

export default questionResolvers
