import express from 'express';
import authRouter from './routes/authRouter.js';
import productRouter from './routes/productRoutes.js';
import sessionRouter from './routes/sessionRoutes.js';
import './models/dbConnections.js'
import cors from 'cors';
import 'dotenv/config';


const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.json({
        message: 'Hello from the backend!'
    });
});



app.use('/auth', authRouter);
app.use('/session', sessionRouter);
app.use('/products', productRouter);
app.use(express.json());

//TODOs
//In /routes folder define all the routes in  file
//Add  app.use('/route-name', specific route); for all routes
//eg app.use('/products', productRouter)
//eg app.use('/cart', cartRouter)
//eg app.use('/reviews', reviewRouter)

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
