import { Schema,model } from "mongoose";

//create product schema
const productSchema=new Schema({
    productid:{
        type:String,
        required:[true,"Product Id is required"],
        unique:[true,"Product Id Existed"],
    },
    productName:{
        type:String,
        required:[true,"Product Name is required"],
     },
     productPrice:{
        type:Number,
        required:[true,"Enter Price of the Product "],
        min:[10000,"The Price Should be  above 10,000"],
        max:[50000,"The Price Should be below 50,000"],
     },
     productBrand:{
        type:String,
        required:[true,"Brand is Required"],
     }
    },{
        versionKey:false,
        timestamps:true,
});
//Generate Product Model
export const ProductModel=model("product",productSchema)
