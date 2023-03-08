import mongoose from "mongoose";
const Schema  = mongoose.Schema;

export const CustomersShema = new Schema({
        customername:{type:String,required:true},
        email:{type:String,index:true,required:true,unique:true},
        password:{type:String,required:true},
        delivery_adress:[{
            adress:{type:String,required:true},
            cp:{type:String,required:true},
            city:{type:String,required:true}
        }],
        home_adress:[{
            adress:{type:String,required:true},
            cp:{type:String,required:true},
            city:{type:String,required:true},
        }]
})