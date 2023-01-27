import mongoose from "mongoose";
const Schema  = mongoose.Schema;
const { ObjectId } = mongoose.Schema.Types;

export const sellersSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    status: { type: String, required: true },
    seller_page: {
      name: { type: String, required: true },
      description: { type: String },
      images: [String],
      products: [{ type: ObjectId, ref: 'Product' }]
    }
  });