import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productname: {
        type: String,
        required: true,
    },
    image:["...................."],
    description: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
        default:0
    },
    stock: {
        type: String,
        default:0
    },
    userId: {
        type: mongoose.Schema.types.ObjectId,
        ref: "User",
    },
    categoryId: {
        type: mongoose.Schema.types.ObjectId,
        ref: "Category",
    },
}, { timestames: true })

export const Product = mongoose.model("Product", productSchema);