const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connection successful");
  } catch (error) {
    console.error("Connection failed", error);
    process.exit(1);  // Optional: Exit process if DB fails
  }
};

module.exports = connectDB;
