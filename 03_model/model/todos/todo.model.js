import mongoose from "mongoose"
import { subTodo } from "./sub_todo.model"

const todoSchema=new mongoose.Schema({
  content:{
    trpe:String,
    required:true,
  },
  complete:{
    type:Boolean,
    default:false
  },
  createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  subTodes:
  [
    {
     type:mongoose.Schema.Types.ObjectId,
     ref:"subTodo"
    }
  ]//Array of Sub Todo
},{timestamps:true});

export const todo= mongoose.model('TOdo',todoSchema)