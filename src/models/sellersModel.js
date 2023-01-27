import mongoose from "mongoose";
import {SellersSchema} from "../schemas/sellersSchema.js"

export const sellersModel = mongoose.model('sellers', SellersSchema);