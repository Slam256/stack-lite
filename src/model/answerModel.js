/* eslint-disable comma-dangle */

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
