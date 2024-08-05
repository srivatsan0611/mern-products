//Entry point for any API
//const express = require('express')
// DB - y7Qd99tkzOiCRUGy
//nodemon for any changes to sync

import express from "express"; // ES6 
import mongoose from "mongoose";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.js";
dotenv.config();

const app = express();
app.use(express.json()); // Middleware : parses all request.body to JSON


app.get("/api/products", async (req,res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({success:true,data:products});

    } catch (error) {
        console.log(`Error in fetching products: ${error.message}`);
        res.status(500).json({success:false,message:"Server Error"});
    }
})

app.post("/api/products", async (req,res) => {
    const product = req.body; // User sends this data

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({success:false, message: "Please provide all fields"});
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({success:true, data: newProduct});
    }
    catch (error) {
        console.error("Error in Create product:", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
});

//Deleting a product endpoint (URI)
app.delete("/api/products/:id", async (req,res) => {
    const {id} = req.params;

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true,message:"Successfully deleted"});
        //console.log("id: ",id); 
    }
    catch (error) {
        console.log(`Error in deleting product: ${error.message}`);
        res.status(404).json({success:false,message:"Product you mentioned doesn't exist"});
    }
})



app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000");
})


