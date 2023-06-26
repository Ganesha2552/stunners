import type { Document, Model } from 'mongoose';
import mongoose, { Schema } from 'mongoose';

export interface ITeam extends Document {
  name: string;
  description: string;
}

const TeamSchema = new Schema<ITeam>(
  {
    name: { type: String, required: true },
    description: { type: String },
  },
  {
    timestamps: true,
  },
);

const Team: Model<ITeam> =
  mongoose.models.Team || mongoose.model<ITeam>('Team', TeamSchema);

export default Team;
