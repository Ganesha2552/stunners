import type { Document, Model } from 'mongoose';
import mongoose, { Schema } from 'mongoose';

export interface IMatch extends Document {
  date: Date;
  venue: Schema.Types.ObjectId;
  team1: Schema.Types.ObjectId;
  team2: Schema.Types.ObjectId;
  result: string;
  winningTeam: Schema.Types.ObjectId;
  matchFormat: Schema.Types.ObjectId;
  isTournament: boolean;
  tournament: Schema.Types.ObjectId;
  isPractice: boolean;
}

const matchSchema = new Schema<IMatch>(
  {
    date: { type: Date, required: true },
    venue: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Venue',
      required: true,
    },
    team1: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Team',
      required: true,
    },
    team2: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Team',
      required: true,
    },
    isTournament: { type: Boolean },
    tournament: { type: mongoose.Schema.Types.ObjectId, ref: 'Tournament' },
    isPractice: { type: Boolean },
    result: { type: String },
    winningTeam: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
    matchFormat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'MatchFormat',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Match: Model<IMatch> =
  mongoose.models.Match || mongoose.model<IMatch>('Match', matchSchema);

export default Match;
