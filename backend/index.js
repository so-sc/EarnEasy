import express from 'express';
import cookieParser from 'cookie-parser';
import mainRouter from './routes/mainRouter.js';
import './models/dbConnections.js'
import cors from 'cors';
import 'dotenv/config';

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true 
}));

app.use(cookieParser());
app.use(express.json());
app.use('/', mainRouter)
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
