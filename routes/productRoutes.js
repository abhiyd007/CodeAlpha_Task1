import { Router } from 'express';
import Product from '../models/Product.js';
const router = Router();

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    console.log(products);
    
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new product (for admin)
router.post('/', async (req, res) => {
  const product = new Product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    imageUrl: req.body.imageUrl
  });
  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
