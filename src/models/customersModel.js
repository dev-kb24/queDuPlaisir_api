import mongoose from "mongoose";
import { CustomersShema } from "../schemas/customersSchema.js";

export const customerModel = mongoose.model('customers', CustomersShema);