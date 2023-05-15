//creating schema using interface

import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

export const userSchema = new Schema<IUser>({
  id: {
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  name: {
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true }
  },
  dob: { type: String },
  gender: { type: String, enum: ['male', 'female'], required: true },
  email: { type: String },
  contact: { type: String, required: true },
  presentAddress: { type: String, required: true }
});

export const User = model<IUser>('User', userSchema);