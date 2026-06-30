import mongoose from 'mongoose';
import { DB_NAME } from '../constant.js';

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    }
    catch (err) {
        console.log('Error while connecting to MongoDB', err);
        process.exit(1);
    }
}