import express from 'express';
const router = express.Router();

import  getAllProducts  from '../controllers/productController.js';

// GET /api/products
router.get('/', getAllProducts);

export default router;

