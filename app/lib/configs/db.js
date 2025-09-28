import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/todo-app");
    console.log("✅ DB connected");
  } catch (error) {
    console.error("❌ DB connection error:", error);
  }
};
