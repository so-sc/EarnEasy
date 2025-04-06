import express from 'express';
import authRouter from './routes/authRouter.js';
import './models/dbConnections.js'

const app = express();

app.get('/', (req, res) => {
    res.json({
        message: 'Hello from the backend!'
    });
});

app.use('/auth', authRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
