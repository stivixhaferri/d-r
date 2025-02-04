import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

export async function connectDB() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: "socialLinksDB",
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
}
