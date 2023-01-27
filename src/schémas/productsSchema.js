import mongoose from "mongoose";
const Schema  = mongoose.Schema;
const { ObjectId } = mongoose.Schema.Types;

export const ProductsSchema = new Schema({
    name:{type:String,required:true,index:true},
    description:{type:String},
    images:[String],
    price:{type:Number,required:true},
    quantity:{type:Number,required:true},
    seller:{type: ObjectId,ref:'seller'},
    category:{type:String},
    brand:{type:String},
    color:{type:String},
    size:{type:String}
})