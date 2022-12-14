// utils/database.js

import mongoose from "mongoose";

const connectDB = async() => {
    try {
        await mongoose.connect(
            "mongodb+srv://user001:0@cluster0.tab8v7j.mongodb.net/?retryWrites=true&w=majority"
        );
        console.log("Success: Connected to MongoDB");
    } catch (err) {
        console.log("Failure: Unconnected to MongoDB");
        throw new Error();
    }
};

export default connectDB;