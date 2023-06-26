import type { Document } from 'mongoose';
import mongoose, { Schema } from 'mongoose';

import Roles from '../enums/Roles';

interface IUser extends Document {
  name: string;
  email?: string;
  password: string;
  phoneNumber: string;
  dob: Date;
  avatar: string;
  state?: string;
  city?: string;
  country?: string;
  type: string;
  role: Roles;
  blockUser: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: false,
      unique: true,
      default: undefined,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    avatar: {
      type: String,
      default:
        'https://softblobsfileupload.s3.eu-west-1.amazonaws.com/avatar_cugq40.png',
    },
    state: {
      type: String,
    },
    city: {
      type: String,
    },
    country: {
      type: String,
    },
    type: {
      type: String,
      default: 'register',
    },
    role: {
      enum: Object.values(Roles),
      default: Roles.player,
    },
    blockUser: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export default User;
