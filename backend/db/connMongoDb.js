import mongoose from "mongoose";

const connMongoDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`DB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error in connecting DB: ${error.message}`);
    process.exit(1);
  }
};

export default connMongoDb;
