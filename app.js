import express from 'express';
import { connect } from 'mongoose';
import pkg from 'body-parser';
const { json } = pkg;
import cors from 'cors';

import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

const app = express();

// Middleware
app.use(cors());
app.use(json());
app.use(express.static('public'));

// Routes

// MongoDB Connection
connect('mongodb://localhost:27017/ecommerce')
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('MongoDB connection error:', error);
});

app.use('/api/products/', productRoutes);
app.use('/api/orders/', orderRoutes);

const PORT =  3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
