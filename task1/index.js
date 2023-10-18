const express=require("express")
const dotenv =require("dotenv")

const conectDB = require("./Dataconnect")
const router = require("./Routers/Router1")
const router3 = require("./Middileware2")


const app=express()







conectDB()
dotenv.config()
app.use(express.json())
    
app.use("/",router)
app.use("/protect",router3)








const PORT=process.env.PORT||5001

app.listen(PORT,()=>console.log(` port number ${PORT}`))


