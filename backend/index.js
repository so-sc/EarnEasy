import express from 'express';
import cookieParser from 'cookie-parser';
import authRouter from './routes/authRouter.js';
import productRouter from './routes/productRoutes.js';
import profileRouter from './routes/profileRoutes.js';
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
app.get('/', (req, res) => {
    res.json({
        message: 'Hello from the backend!'
    });
});

app.use('/auth', authRouter);
app.use('/profile', profileRouter);
app.use('/products', productRouter);

//TODOs
//In /routes folder define all the routes in  file
//Add  app.use('/route-name', specific route); for all routes
//eg app.use('/products', productRouter)
//eg app.use('/cart', cartRouter)
//eg app.use('/reviews', reviewRouter)

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
