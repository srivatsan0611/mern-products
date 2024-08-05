import mongoose from "mongoose";

/* Product has 
1. Name
2. Price
3. Image
*/

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
}, {
    timestamps: true // createdAt & updatedAt
});

const Product = mongoose.model('Product', productSchema);
// mongoose understands based on SINGULAR schema and makes it plural for perusal


export default Product;