import mongoose from "mongoose";
import {SellersSchema} from "../schémas/sellersSchema.js"

export const sellersModel = mongoose.model('sellers', SellersSchema);