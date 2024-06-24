import mongoose from 'mongoose'
import passport from 'passport'

const ouser = new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:[true, 'email is required']
    },
    userName:{
        type:String,
        required:[true, 'userName is required'],
    },
    password:{
        type:String
    }
    
})
export const Ouser = mongoose.model('Ouser',ouser)
