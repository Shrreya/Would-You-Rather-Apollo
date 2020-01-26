const Question = require('../models/Question')

const questionResolvers = {
    Query: {
        questions: () => Question.find({}),
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
        }
    }
}

module.exports = questionResolvers