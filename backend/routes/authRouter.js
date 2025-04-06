import express from 'express';
import { googleAuth } from '../controllers/authController.js';
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: 'Router Testing!'
    })
})

router.get('/google',googleAuth); // googleAuth From controllers

export default router;

