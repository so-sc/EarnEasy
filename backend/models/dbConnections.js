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

/**
* NOTE
* Added an IP in mongodb Atlas (0.0.0.0/0) - to access the DB from anywhere (whitelisting all the IPs)
* this is added for the testing purpose 
* later add the Backend Server IP address after deployment and remove the All whitelisted IP (0.0.0.0/0) for security purposes.
*/