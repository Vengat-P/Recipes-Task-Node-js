import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'


dotenv.config();

const app = express();


app.use(express.json());
app.use(cors())


app.length("/",(req,res)=>{
    res.status(200).json({message:"Welcom To Backend"})
})


const port = process.env.PORT


app.listen(port,()=>{
    console.log("server started");
    
})