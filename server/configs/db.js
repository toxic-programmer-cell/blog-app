import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Database connected")
    );
    await mongoose.connect(`${process.env.DATABASE_URL}/weallblog`);
  } catch (error) {
    console.log("BD-ERROR: ", error.message);
  }
};

export default connectDB;
