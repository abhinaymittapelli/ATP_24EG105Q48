import { Schema,model } from 'mongoose'

const userSchema=new Schema({
    firstName:{
        type:String,
        required:[true,'First name is Required'],

    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
        required:[true,"Email Required"],
        unique:[true,"Email Already Existed"]
    },
    password:{
        type:String,
        required:[true,"Password required"],
    },
    role:{
        type:String,
        enum:["USER","AUTHOR","ADMIN"],
        required:[true,"Invalid role"]
    },
    profileImageUrl:{
        type:String,
        default:"",
    },
    isUserActive:{
        type:Boolean,
        default:true
    }
},{
    timestamps:true,
    versionKey:false,
    
})

export const UserModel=model('user',userSchema)