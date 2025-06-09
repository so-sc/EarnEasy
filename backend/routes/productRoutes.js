import express from 'express';
const router = express.Router();

import  {getAllProducts,createProduct} from '../controllers/productController.js';

// GET /api/products
router.get('/', getAllProducts);

// POST /api/products
router.post('/', createProduct);

export default router;

