// require('dotenv').config({path:'./env'})

import dotenv from 'dotenv'


import mongoose from "mongoose"
import {DB_NAME} from './constant.js'
import connectDb from "./db/index.js"


dotenv.config({
    path:'./env'
})






connectDb()






/*
import express from "express"

const app= express();
    // function connectDB(){}
    // connectDB()

    ; (async () => { 
        try{
           await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
            app.on("error",(error)=>{
                console.log("Error:",error)
                throw error;
            })
            app.listen(process.env.PORT,()=>{
                console.log("App is running at",process.env.PORT)
            })
        }
        catch(error){
            console.error("Error:",error)
        }
    })
*/
