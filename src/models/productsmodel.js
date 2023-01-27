import mongoose from "mongoose";
import {ProductsSchema} from '../schémas/productsSchema.js'

export const productsModel = mongoose.model('products', ProductsSchema);