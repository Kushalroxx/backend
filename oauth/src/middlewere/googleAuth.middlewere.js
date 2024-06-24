import 'dotenv/config'
import passport from 'passport'
import {Strategy as GoogleStrategy} from 'passport-google-oauth20'
import {Ouser} from '../models/Ouser.model.js'

passport.use(new GoogleStrategy({
    clientID:process.env.GOOGLE_CLIENT_ID,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    callbackURL:'http://localhost:3000/auth/google/callback'
},async(accessToken, refreshToken, profile, done)=>{
    try {
        const email = profile.emails[0].value
        const displayName = profile.displayName
        
        let user = await Ouser.findOne({email:email})
        
        if(!user){
           user = await Ouser.create({email:email, userName:displayName})
        }
        return done(null, user)
        
    } catch (error) {
        return done(error,null)
    }
}
))