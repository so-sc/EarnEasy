import express from 'express';
import { validateAuth, logout } from '../controllers/authController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', authenticateToken, validateAuth); // Get profile info
router.post('/logout', authenticateToken, logout);

export default router;
