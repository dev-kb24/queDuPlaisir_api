const mongoose = require('mongoose');
const Schema  = mongoose.Schema;
const { ObjectId } = mongoose.Schema.Types;

export const OrdersSchema = new mongoose.Schema({
  customer: {
    type: ObjectId,
    ref: 'Customer',
    required: true
  },
  products: [
    {
      product: {
        type: ObjectId,
        ref: 'Product',
        required: true
      },
      quantity: {
        type: Number,
        required: true
      },
      price: {
        type: Number,
        required: true
      }
    }
  ],
  total: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['processing', 'completed', 'cancelled'],
    default: 'processing'
  },
  date: {
    type: Date,
    default: Date.now
  }
});
