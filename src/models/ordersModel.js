import mongoose from "mongoose";
import {OrdersSchema} from '../schémas/ordersSchema.js'

export const ordersModel = mongoose.model('orders', OrdersSchema);