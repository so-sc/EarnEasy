import express from 'express';
import { googleAuth } from '../controllers/authController.js';
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: 'Auth Router Testing!'
    })
})

router.get('/google',googleAuth);

export default router;

