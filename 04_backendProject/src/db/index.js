import mongoose from "mongoose"
import {DB_NAME} from "../constant.js"

const connectDb= async()=>{
    try{
        const connectionInstance=await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
       console.log(`\n MongoDb connected  DB Host ${connectionInstance.connection.host}`)
    }catch(error){
        console.log("MONGO connection error-> ",error)
        process.exit(1)
    }
}

export default  connectDb