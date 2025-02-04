import { Schema, model, models, Document } from 'mongoose';

// Define the Blog interface to be type-safe
export interface IBlog extends Document {
  title: string;
  content: string;
  imagePath: string;
  createdAt: Date;
}

const blogSchema = new Schema<IBlog>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    imagePath: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// Create and export the model
export const Blog = models.Blog || model<IBlog>('Blog', blogSchema);
