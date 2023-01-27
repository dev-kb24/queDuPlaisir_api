import mongoose from "mongoose";
import { UsersShema } from "../schemas/usersSchema.js";

export const usersModel = mongoose.model('users', UsersShema);