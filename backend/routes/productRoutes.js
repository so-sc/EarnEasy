import express from 'express';
import  {getAllListing,createProduct, getIndividualListing} from '../controllers/productController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';
const router = express.Router();


router.get('/', getAllListing);
router.post('/',authenticateToken, createProduct); //user authenticated route(protected)
router.get('/:id', getIndividualListing)

export default router;

// router.put('/:id', authenticateToken, updateProduct); // Protected (later)
// router.delete('/:id', authenticateToken, deleteProduct); // Protected (later)
