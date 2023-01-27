import mongoose from "mongoose";
const Schema  = mongoose.Schema;

export const UsersShema = new Schema({
    username:{type:String,required:true},
    email:{type:String,index:true,required:true,unique:true},
    password:{type:String,required:true},
})