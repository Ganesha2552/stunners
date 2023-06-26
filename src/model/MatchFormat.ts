import type { Document, Model } from 'mongoose';
import mongoose, { Schema } from 'mongoose';

export interface IMatchFormat extends Document {
  name: string;
  description: string;
}

const matchFormatSchema = new Schema<IMatchFormat>(
  {
    name: { type: String, required: true },
    description: { type: String },
  },
  {
    timestamps: true,
  },
);

const MatchFormat: Model<IMatchFormat> =
  mongoose.models.MatchFormat ||
  mongoose.model<IMatchFormat>('MatchFormat', matchFormatSchema);

export default MatchFormat;
