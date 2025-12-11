import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
dotenv.config();
//console.log('MONGODB_URL:', process.env.MONGODB_URL);
import {connectDB} from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import studyPlanRoutes from  './routes/studyPlanRoutes.js';
connectDB();

const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/auth', authRoutes);
app.use('/api/study', studyPlanRoutes);

app.listen(process.env.PORT, () =>{
    console.log(`Server is running on port ${process.env.PORT}`)
}) //post man url always in small cases. should create new workspace and collection and give name to collection add anew request and post and give url and go to body and select raw jason and give data and check.