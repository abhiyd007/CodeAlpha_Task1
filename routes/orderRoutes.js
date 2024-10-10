import { Router } from 'express';
import Order from '../models/Order.js';
const router = Router();

// Create new order
router.post('/', async (req, res) => {
  const order = new Order({
    products: req.body.products,
    totalAmount: req.body.totalAmount,
    customerEmail: req.body.customerEmail
  });
  try {
    const newOrder = await order.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
