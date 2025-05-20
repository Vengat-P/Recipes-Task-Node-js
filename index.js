import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './Database/dbConfig.js';

// configure dotenv file
dotenv.config();

//initialize express app
const app = express();

//setup default middleware
app.use(express.json());
app.use(cors())

// connect DB by calling connectDB Function
connectDB();

//default router
app.length("/",(req,res)=>{
    res.status(200).json({message:"Welcom To Backend"})
})

//port initialization
const port = process.env.PORT

// server starting function
app.listen(port,()=>{
    console.log("server started");
    
})