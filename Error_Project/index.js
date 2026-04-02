const express= require('express')
const app=express();

const errorHandler=require('./Middleware/errorHandling')

app.get("",(req,res)=>{
    res.send("<h1>Welcome to home page</h1>")
})

app.use((req,res,next)=>{
    const error =new Error("Something not found !")
    error.statusCode=404
    error.status= "failed"
    next(error)
})

app.use(errorHandler)

app.listen(3000,()=>{
    console.log("Server is listening at http://localhost:3000")
})








