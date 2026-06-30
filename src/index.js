import mongoose from 'mongoose';
import { DB_NAME } from './constant.js';


// import express from 'express';
// const app = express();
// ; (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//         app.on('error', (err) => {
//             console.log('Error while connecting to MongoDB', err);
//             throw err;
//         });

//         app.listen(process.env.PORT, () => {
//             console.log(`App is running on PORT - ${process.env.PORT}`)
//         })
//     } catch (err) {
//         console.log('Error while connecting to MongoDB', err);
//         throw err;
//     }
// })()