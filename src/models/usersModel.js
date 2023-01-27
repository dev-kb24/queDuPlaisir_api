import mongoose from "mongoose";
import { UsersShema } from "../schémas/usersSchema.js";

export const usersModel = mongoose.model('users', UsersShema);