import { Schema, model } from 'mongoose';

const orderSchema = new Schema({
  products: [{ 
    productId: Schema.Types.ObjectId, 
    quantity: Number 
  }],
  totalAmount: Number,
  customerEmail: String,
  orderDate: { type: Date, default: Date.now }
});

const Order = model('Order', orderSchema);

export default Order;
