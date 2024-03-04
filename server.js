import express from 'express';
import products from './data/products.js';
import dotenv from 'dotenv';
import connectDB from './db.js';
dotenv.config();
const port=process.env.PORT||5000;
connectDB();
const app=express();
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('API is running');
})

app.get('/api/products',(req,res)=>{
    res.json(products);
}
)

app.get('/api/products/:id',(req,res)=>{
    const product=products.find((p)=>p._id === req.params.id);
    res.json(product);
}
)


app.listen(port,()=>console.log(`Server running on port${port}`))