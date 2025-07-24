import Product from '../models/ListingSchema.js';

const getAllListing = async (req, res) => {
  try {
    const { typeOfOperation } = req.query;
    let filter = {};
    if (typeOfOperation) {
      filter.typeOfOperation = typeOfOperation; 
    }
    const products = await Product.find(filter);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

// POST a new product
const createProduct = async (req, res) => {
  try {
    const ownerId = req.userId;
    const { title, price, description, features, img, condition, rentable, available, typeOfOperation } = req.body;
    if (!title || !price || !description || !img || !features || !condition || !typeOfOperation) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    const newProduct = new Product({ title, price, description, features, img, ownerId, condition, available, typeOfOperation });
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

const getIndividualListing = async (req, res) => {
  try {
    const productId = req.params.id;
    const individualProd = await Product.findById(productId);
    if (!individualProd) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(individualProd);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch one product', details: error.message });
  }
};

export { getAllListing, createProduct, getIndividualListing };
