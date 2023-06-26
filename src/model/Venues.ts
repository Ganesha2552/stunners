import type { Document, Model } from 'mongoose';
import mongoose, { Schema } from 'mongoose';

export interface IVenue extends Document {
  name: string;
  city: string;
  location: string;
}

const venueSchema = new Schema<IVenue>(
  {
    name: { type: String, required: true },
    city: { type: String, required: true },
    location: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const Venue: Model<IVenue> =
  mongoose.models.Venue || mongoose.model<IVenue>('Venue', venueSchema);

export default Venue;
