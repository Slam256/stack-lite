/* eslint-disable comma-dangle */
// id: '840fc7c2-2cd0-415a-8a82-ba74d5188941',
//     qtnId: 1,
//     ans: 'This is answer to qtn1',

import mongoose from 'mongoose';

const answerSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    description: {
      type: String,
      required: [true, 'Please type an answer'],
    },
    qtnId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Question',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Answer', answerSchema);
