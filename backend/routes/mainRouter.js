import express from 'express';
import authRouter from './authRouter.js';
import listingRouter from './listingRoutes.js';
import rentalsRouter from './rentalRouter.js'; 

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: 'Hello from the backend!eee'
    });
});

router.use('/auth', authRouter);
router.use('/listing', listingRouter); 
router.use('/rentals', rentalsRouter);

export default router;