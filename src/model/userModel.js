/* eslint-disable comma-dangle */
import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add name'],
    },
    email: {
      type: String,
      required: [true, 'Please add a valid email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please create a safe password'],
    },
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema);
