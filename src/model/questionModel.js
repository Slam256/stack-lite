/* eslint-disable comma-dangle */
import mongoose from 'mongoose';

const questionSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  title: {
    type: String,
    required: [true, 'Please add title'],
  },
  description: {
    type: String,
    required: [true, 'Please add more details to your question'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Question', questionSchema);
