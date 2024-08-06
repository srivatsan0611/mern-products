//Entry point for any API
//const express = require('express')
// DB - y7Qd99tkzOiCRUGy
//nodemon for any changes to sync

//Patch for just updating few fields
//Put for almost all?

import express from "express"; // ES6 
import mongoose from "mongoose";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.js";
dotenv.config();

const app = express();
app.use(express.json()); // Middleware : parses all request.body to JSON


app.get("/api/products", async (req,res) => {
    
})

app.post("/api/products", async (req,res) => {
    
});

app.put("/api/products/:id", async (req,res) => {
    const { id } = req.params;
    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({success:false,message: "Product Not Found"});
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new:true});
        res.status(200).json({success:true, data: updatedProduct });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({success:false,message: "Server Error"});
        
    }
});

//Deleting a product endpoint (URI)
app.delete("/api/products/:id", async (req,res) => {
    
})



app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000");
})


