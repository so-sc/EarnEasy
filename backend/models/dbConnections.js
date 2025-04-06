import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose'; 

const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL)
.then(() => {
    console.log("MongoDB connected successfully");
}).catch((err) => {
    console.error("MongoDB connection error:", err.message);
});  