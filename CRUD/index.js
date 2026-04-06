const express=require('express')
const app = express()
const users = require('./Users.json')


app.get('/api/userData',(req,res)=>{
    return res.json(users)
})
app.get('/userName',(req,res)=>{
   const html = `
   <ul>
        ${users.map(user=>`<li>${user.name}</li>`).join(' ')}
   </ul>
   `
   res.send(html)
})
app.get('/userData/:id',(req,res)=>{
    const id =req.params.id
    console.log(id)
    const user_wise = users.find(user=> user.id==id)
    return res.json(user_wise)
})

app.listen(3000,()=>{
    console.log("Server is listen on the port http://localhost:3000")
})