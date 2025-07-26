import express from 'express';
import  {getAllListing,createProduct, getIndividualListing, updateIndividualListing} from '../controllers/listingController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';
const router = express.Router();


router.get('/', getAllListing);
router.get('/:id', getIndividualListing)
router.post('/create',authenticateToken, createProduct); //user authenticated route(protected)
router.put('/:id',authenticateToken, updateIndividualListing)

export default router;

// router.put('/:id', authenticateToken, updateProduct); // Protected (later)
// router.delete('/:id', authenticateToken, deleteProduct); // Protected (later)
