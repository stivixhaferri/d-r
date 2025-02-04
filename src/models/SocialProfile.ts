import mongoose, { Schema, Document } from "mongoose";

export interface ISocialProfile extends Document {
  facebook: string;
  instagram: string;
  gmail: string;
  twitter: string;
  phone?: string;
  createdAt: Date;
}

const SocialProfileSchema = new Schema<ISocialProfile>(
  {
    facebook: { type: String, required: true },
    instagram: { type: String, required: true },
    gmail: { type: String, required: true },
    twitter: { type: String, required: true },
    phone: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.SocialProfile ||
  mongoose.model<ISocialProfile>("SocialProfile", SocialProfileSchema);
