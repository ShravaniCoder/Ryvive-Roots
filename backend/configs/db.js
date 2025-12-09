import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => console.log("Database Connects")
        );
        await mongoose.connect(`${process.env.MONGODB_URI}/subscription`)
    } catch (error) {
        console.error(error.message);
    }
}

export default connectDB;