import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log("DB URL",  process.env.MONGODB_URL)
    await mongoose.connect( process.env.MONGODB_URL as string);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("DB connection failed:", err);
    process.exit(1);
  }
};
