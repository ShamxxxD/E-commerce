import mongoose from 'mongoose';

const { DB_USERNAME, DB_PASSWORD } = process.env;
const DB_URI = `mongodb+srv://shamdev2811:Thong281197@cluster0.kmq0ffu.mongodb.net/test`;

// const DB_URI = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.kmq0ffu.mongodb.net/test`;
const connectDatabase = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log('Database connected!');
  } catch (error) {
    console.log(error);
  }
};

export { connectDatabase };
