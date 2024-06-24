import express from 'express'
import passport from 'passport'
import { googleCallbackConteroler } from '../controlers/google.controler.js'

const googleRoute = express()

googleRoute.route('/google').get(passport.authenticate('google',{scope:['email', 'profile']}))

googleRoute.route('/google/callback').get(passport.authenticate('google',{session:false}),googleCallbackConteroler)

export {googleRoute}