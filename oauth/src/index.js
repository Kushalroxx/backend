import { app } from "./app.js";
import 'dotenv/config'
import { connectDB } from "./db/connect.db.js";

Promise.resolve(connectDB()).then(()=>{
    app.listen(3000, ()=>console.log('server is listening on port 3000'))
})