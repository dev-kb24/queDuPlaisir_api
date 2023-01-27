import mongoose from "mongoose";
import {ProductsSchema} from '../schemas/productsSchema.js'

export const productsModel = mongoose.model('products', ProductsSchema);