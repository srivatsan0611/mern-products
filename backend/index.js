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
//import Product from "./models/product.js";
import productRoutes from "./routes/product.route.js"
dotenv.config();

const PORT = process.env.PORT || 5000
const app = express();
app.use(express.json()); // Middleware : parses all request.body to JSON


app.use("/api/products",productRoutes);


app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
})


