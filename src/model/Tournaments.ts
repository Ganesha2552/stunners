import type { Document, Model } from 'mongoose';
import mongoose, { Schema } from 'mongoose';

export interface ITournament extends Document {
  name: string;
  description: string;
}

const TournamentSchema = new Schema<ITournament>(
  {
    name: { type: String, required: true },
    description: { type: String },
  },
  {
    timestamps: true,
  },
);

const Tournament: Model<ITournament> =
  mongoose.models.Tournament ||
  mongoose.model<ITournament>('Tournament', TournamentSchema);

export default Tournament;
