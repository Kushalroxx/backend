import mongoose from 'mongoose'

export const connectDB =async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI).then(console.log('DB connected'))
    } catch (error) {
        throw error
    }
} 