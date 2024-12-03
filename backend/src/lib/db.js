import mongoose from 'mongoose';

export const dbConnect = async () => {
    try{
        const connection = await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connected successfully 👋");
    }catch{
        console.log("mongoDB connection error: ", error);
    }
};