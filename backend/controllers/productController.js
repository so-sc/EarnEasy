import Product from '../models/Products.js';

// GET all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

// POST a new product
const createProduct = async (req, res) => {
  try {
    const { name, price, desc, img } = req.body;
    if (!name || !price || !desc || !img) {
      return res.status(400).json({ error: 'All fields (name, price, desc, img) are required' });
    }
    const newProduct = new Product({ name, price, desc, img });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Failed to create product', details: error.message });
    }
  }
};

export {getAllProducts, createProduct};
