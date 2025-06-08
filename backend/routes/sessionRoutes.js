import express from 'express';
import { validateSession, logout } from '../controllers/authController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// Session management routes
router.get('/validate', verifyToken, validateSession);
router.post('/logout', verifyToken, logout);

export default router;