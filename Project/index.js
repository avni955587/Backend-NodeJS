const express= require('express')
const app=express()
const {resultFilter,logfile, logFile}= require('./middleWare')

app.set("view engine","ejs")

// Application level middleware
app.use(resultFilter)
app.use(logFile)

app.get('',(req,res)=>{
    let Student={
        name:'Avni Gangwar',
        uniRoll:24150001239,
        email:'avni@gmail.com',
        age:20,
        hobby:["Coding","ClassBunk","WatchingPakDrama"]
    }
    res.render('home',{stu:Student})
})

app.listen(3000,()=>{
    console.log("Server is listening at http://localhost:3000")
})