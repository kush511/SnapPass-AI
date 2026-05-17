import mongoose from "mongoose";

const connectDatabase = async () => {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    throw new Error("MONGO_URI is not set in environment variables.");
  }

  // basic error handling, Update it later. 
  mongoose.connection.on("connected", () => {
    console.log(" MongoDB connected");
  });

  mongoose.connection.on("error", (error) => {
    console.error("MongoDB connection error:", error.message);
  });

  mongoose.connection.on("disconnected", () => {
    console.warn("MongoDB disconnected");
  });

  await mongoose.connect(mongoUri);
};

export default connectDatabase;
