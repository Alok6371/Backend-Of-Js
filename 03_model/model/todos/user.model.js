import mongoose, { mongo } from 'mongoose'

new userSchema= new mongoose.Schema(
  {
    // username:String,
    // email:String,
    // isActive:Boolean
    username:{
      type:String,
      required:true,
      unique:true,
      lowercase:true
    }
    ,
    email:{
      type:String,
      required:true,
      unique:true,
      lowercase:true
    },
    password:{
      type:String,
      required:[true,"Password is required"]
    }
  },
  {
    timestamps:true
  }
)


export const User= mongoose.model("User",userSchema)
// 'users'