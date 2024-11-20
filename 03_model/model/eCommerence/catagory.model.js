import { Timestamp } from 'bson';
import mongoose, { mongo } from 'mongoose';

const catagorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Catagory = mongoose.model('Catagory', catagorySchema);
