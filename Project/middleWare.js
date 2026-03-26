const fs=require('fs')
const resultFilter = (req,res,next)=>{
    console.log("Hello from First middleware")
    req.name="Rahul"
    // return res.json({sub:"backend"})
    // res.end("byebye")
    next()
}

const logFile=(req,res,next)=>{
    console.log("Middleware Second call......")
    const date = new Date()
    fs.appendFile('log.txt',`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}:${req.method}:${req.path}`,(err)=>{
        if(err) console.log(err)
        console.log("log File generated.......")
    })
    next()
}
module.exports={resultFilter,logFile}