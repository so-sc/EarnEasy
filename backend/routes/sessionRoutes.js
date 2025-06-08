import express from 'express';
import { validateSession, logout } from '../controllers/authController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// Session management routes
router.get('/validate', authenticateToken, validateSession);
router.post('/logout', authenticateToken, logout);

export default router;