import express from 'express';
import { googleAuth, validateAuth, logout } from '../controllers/authController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: 'Auth Router Testing!'
    })
})

router.get('/google', googleAuth);
router.get('/validate', authenticateToken, validateAuth);
router.post('/logout', authenticateToken, logout);

export default router;
