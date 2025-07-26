import express from 'express';
import  {getAllListing,createProduct, getIndividualListing, updateIndividualListing, deleteIndividualListing} from '../controllers/listingController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';
const router = express.Router();


router.get('/', getAllListing);
router.get('/:id', getIndividualListing)
router.post('/create',authenticateToken, createProduct); //user authenticated route(protected)
router.put('/:id',authenticateToken, updateIndividualListing)
router.delete('/:id',authenticateToken, deleteIndividualListing)

export default router;