import jwt from 'jsonwebtoken'

export const googleCallbackConteroler = (req, res)=>{
    const user = req.user
    const token = jwt.sign({email:user.email, userName:user.displayName}, process.env.JWT_SECRET)

    res.redirect(`http://localhost:3000?token=${token}`)
}