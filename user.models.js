import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        Street: String,
        zipcode: Number,
        city: String,
        Country: String
    },
    role: {
        type: String,
        enum: ["CUSTOMER", "ADMINE"],
        default: CUSTOMER,
    },

}, { timestames: true })

export const User = mongoose.model("User", userSchema);