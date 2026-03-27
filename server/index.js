import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/connectDb.js"
dotenv.config()

const app = express()

const PORT = process.env.PORT

app.get("/" ,(req,res)=>{
    return res.json({ "message": "server started" })
})

app.listen(PORT,()=>{
   console.log(`server running on http://localhost:${PORT}`)
   connectDb()
})