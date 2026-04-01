const express= require('express')
const app=express();
const reqAge=require('./middleWare')
const router=express.Router()
router.use(reqAge)

// app.use(Age)
app.get("",(req,res)=>{
    res.send("WElcome to Home Page")
})
app.get("/about",reqAge,(req,res)=>{
    res.send("WElcome to About Page")
})
app.use(router)
router.get("/contact",(req,res)=>{
    res.send("WElcome to Contact Page")
})

app.listen(3000,()=>{
    console.log("Server is listening at http://localhost:3000")
})








