const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const mongoURI = "mongodb://localhost:27017/bancomongo";
    await mongoose.connect(mongoURI);

    console.log("MongoDB Conectado");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
module.exports = connectDB;
    