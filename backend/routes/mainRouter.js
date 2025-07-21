import express from 'express';
import authRouter from './authRouter.js';
import productRouter from './productRoutes.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: 'Hello from the backend!eee'
    });
});

router.use('/auth', authRouter);
router.use('/products', productRouter); 

export default router;