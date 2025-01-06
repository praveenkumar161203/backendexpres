import express from 'express';
import bodyParser from 'body-parser';
import mongoose, { Mongoose } from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/userRoute.js';
import cors from 'cors';

const app=express();
app.use(bodyParser.json());//middleware to parse json data
app.use(cors());
dotenv.config();
const PORT=process.env.PORT || 8000;//if port 3000 is not available then use 8000
const MONGO_URL=process.env.MONGO_URL;
app.use('/api/user',router);
mongoose
    .connect(MONGO_URL)
    .then(()=>{
    console.log('MongoDB connected');
    app.listen(PORT,()=>{    
        console.log(`Server is running on port ${PORT}`);
    });
})