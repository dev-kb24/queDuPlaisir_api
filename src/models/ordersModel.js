import mongoose from "mongoose";
import {OrdersSchema} from '../schemas/ordersSchema.js'

export const ordersModel = mongoose.model('orders', OrdersSchema);