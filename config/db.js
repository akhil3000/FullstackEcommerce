import mongoose from 'mongoose';

import dotenv from 'dotenv';
const connectDB=async()=>{
   
    const MONGO_URI="mongodb+srv://Akhil:Akhil1234@cluster0.ghgsmj9.mongodb.net/FullStackEcommerce?retryWrites=true&w=majority&appName=Cluster0"
    try{
       const conn=await mongoose.connect(MONGO_URI);
       console.log(`MongoDB Connected:${conn.connection.host}`) 

    }catch(error){
      console.log(`Error:${error.message}`);
      process.exit(1);
    }

}

export default connectDB;