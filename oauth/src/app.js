import express from 'express'
import passport from 'passport'
import { googleRoute } from './routes/google.route.js'
import '../src/middlewere/googleAuth.middlewere.js'

const app = express()

app.use(passport.initialize())
app.get('/',(req,res)=>{
    res.send('<a href="http://localhost:3000/auth/google">login with google</a>')
})
app.use('/auth', googleRoute)

export { app }