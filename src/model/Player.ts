import type { Document, Model } from 'mongoose';
import mongoose, { Schema } from 'mongoose';

import BattingStyle from '../enums/BattingStyle';
import BowlingStyle from '../enums/BowlingStyle';
import PlayerCategory from '../enums/PlayerCategory';
import ThrowingArm from '../enums/ThrowingArm';

export interface IPlayer extends Document {
  user: Schema.Types.ObjectId;
  category: PlayerCategory;
  debutDate?: Date;
  placeOfBirth?: string;
  bowlingStyle: BowlingStyle;
  battingStyle: BattingStyle;
  nicknames?: string[];
  favoriteCricketers?: string[];
  favoriteShot?: string;
  favoriteBall?: string;
  bestCricketMoment?: string;
  jerseyNo: number;
  throwingArm: ThrowingArm;
  createdAt: Date;
  updatedAt: Date;
  gameStats?: GameStats[];
  overallStats?: OverallStats[];
}
export interface GameStats extends Document {
  match: Schema.Types.ObjectId;
  batting: {
    battingNo?: number;
    minutes?: number;
    runs?: number;
    boundaryRuns?: number;
    sixes?: number;
    fours?: number;
    ballsFaced?: number;
    notOut?: boolean;
    bowled?: boolean;
    caught?: boolean;
    stumped?: boolean;
    lbw?: boolean;
    runOut?: boolean;
    otherDismissals?: boolean;
    didNotBat: boolean;
  };
  bowling: {
    overs?: number;
    ballsBowled?: number;
    maidens?: number;
    wickets?: number;
    runsConceded?: number;
    wides?: number;
    noBall?: number;
    bowled?: number;
    caught?: number;
    stumped?: number;
    lbw?: number;
    otherDismissals?: number;
    didNotBowl: boolean;
  };
  fielding: {
    catches: number;
    runOuts: number;
    stumpings: number;
    wicketKeeperByes: number;
  };
  captain: {
    isCaptain: boolean;
    win: boolean;
  };
}

export interface OverallStats extends Document {
  matchType: Schema.Types.ObjectId;
  totalMatches: number;
  batting: {
    totalInnings: number;
    averageBattingOrder: number;
    battingAverage: number;
    overallStrikeRate: number;
    minutes: number;
    runs: number;
    boundaryRuns: number;
    sixes: number;
    fours: number;
    ballsFaced: number;
    notOuts: number;
    bowled: number;
    caught: number;
    stumped: number;
    lbw: number;
    runout: number;
    otherDismissals: number;
  };
  bowling: {
    totalInnings: number;
    overs: number;
    bowlingAverage: number;
    bowlingStrikeRate: number;
    ballsBowled: number;
    maidens: number;
    wickets: number;
    runsConceded: number;
    extras: number;
    bowled: number;
    caught: number;
    stumped: number;
    lbw: number;
    otherDismissals: number;
  };
  fielding: {
    catches: number;
    runOuts: number;
    stumpings: number;
    wicketKeeperByes: number;
  };
  captain: {
    matchesCaptained: number;
    totalWins: number;
    winPercentage: number;
  };
}

const gameStatsSchema = new Schema<GameStats>(
  {
    match: { type: mongoose.Schema.Types.ObjectId, ref: 'Match' },
    batting: {
      battingNo: { type: Number, default: 0 },
      minutes: { type: Number, default: 0 },
      runs: { type: Number, default: 0 },
      boundaryRuns: { type: Number, default: 0 },
      sixes: { type: Number, default: 0 },
      fours: { type: Number, default: 0 },
      ballsFaced: { type: Number, default: 0 },
      notOut: { type: Boolean, default: false },
      bowled: { type: Boolean, default: false },
      caught: { type: Boolean, default: false },
      stumped: { type: Boolean, default: false },
      lbw: { type: Boolean, default: false },
      runOut: { type: Boolean, default: false },
      otherDismissals: { type: Boolean, default: false },
      didNotBat: { type: Boolean, default: true },
    },
    bowling: {
      overs: { type: Number },
      ballsBowled: { type: Number },
      maidens: { type: Number },
      wickets: { type: Number },
      runsConceded: { type: Number },
      wides: { type: Number },
      noBall: { type: Number },
      bowled: { type: Number },
      caught: { type: Number },
      stumped: { type: Number },
      lbw: { type: Number },
      otherDismissals: { type: Number },
      didNotBowl: { type: Boolean },
    },
    fielding: {
      catches: { type: Number },
      runOuts: { type: Number },
      stumpings: { type: Number },
      wicketKeeperByes: { type: Number },
    },
    captain: {
      isCaptain: { type: Boolean },
      win: { type: Boolean },
    },
  },
  { _id: false },
);
const overallStatsSchema = new Schema<OverallStats>(
  {
    matchType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'MatchFormat',
      required: true,
    },
    totalMatches: { type: Number },
    batting: {
      totalInnings: { type: Number },
      averageBattingOrder: { type: Number },
      battingAverage: { type: Number },
      overAllStrikeRate: { type: Number },
      minutes: { type: Number, default: 0 },
      runs: { type: Number, default: 0 },
      boundaryRuns: { type: Number, default: 0 },
      sixes: { type: Number, default: 0 },
      fours: { type: Number, default: 0 },
      ballsFaced: { type: Number, default: 0 },
      notOuts: { type: Number, default: 0 },
      bowled: { type: Number },
      caught: { type: Number },
      stumped: { type: Number },
      lbw: { type: Number },
      runout: { type: Number },
      otherDismissals: { type: Number },
    },
    bowling: {
      totalInnings: { type: Number },
      overs: { type: Number, default: 0 },
      bowlingAverage: { type: Number },
      bowlingStrikeRate: { type: Number },
      ballsBowled: { type: Number },
      maidens: { type: Number, default: 0 },
      wickets: { type: Number, default: 0 },
      runsConceded: { type: Number, default: 0 },
      extras: { type: Number, default: 0 },
      bowled: { type: Number, default: 0 },
      caught: { type: Number, default: 0 },
      stumped: { type: Number, default: 0 },
      lbw: { type: Number, default: 0 },
      otherDismissals: { type: Number, default: 0 },
    },
    fielding: {
      catches: { type: Number, default: 0 },
      runOuts: { type: Number, default: 0 },
      stumpings: { type: Number, default: 0 },
      wicketKeeperByes: { type: Number },
    },
    captain: {
      matchesCaptained: { type: Number },
      totalWins: { type: Number },
      winPercentage: { type: Number },
    },
  },
  { _id: false },
);
const playerSchema = new Schema<IPlayer>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    category: {
      enum: Object.values(PlayerCategory),
      default: PlayerCategory.AllRounder,
    },
    debutDate: {
      type: Date,
      default: undefined,
    },
    placeOfBirth: {
      type: String,
      default: '',
    },
    bowlingStyle: {
      enum: Object.values(BowlingStyle),
      default: BowlingStyle['Right-arm offbreak'],
    },
    battingStyle: {
      enum: Object.values(BattingStyle),
      default: BattingStyle['Right-handed'],
    },
    nicknames: {
      type: [String],
      default: [],
    },
    favoriteCricketers: {
      type: [String],
      default: [],
    },
    favoriteShot: {
      type: String,
      default: '',
    },
    favoriteBall: {
      type: String,
      default: '',
    },
    bestCricketMoment: {
      type: String,
      default: '',
    },
    jerseyNo: {
      type: Number,
      default: 0,
    },
    throwingArm: {
      enum: Object.values(ThrowingArm),
      default: ThrowingArm.Right,
    },
    gameStats: [gameStatsSchema],
    overallStats: [overallStatsSchema],
  },
  {
    timestamps: true,
  },
);

const Player: Model<IPlayer> =
  mongoose.models.Player || mongoose.model<IPlayer>('Player', playerSchema);

export default Player;
