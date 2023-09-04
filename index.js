const express = require('express')
require('dotenv').config()
const app = express()

app.get('/student/:std1',(req,res)=>{
   console.log(req.params.std1);
   const std1 = req.params.std1
   // res.json({"name":std1})
   res.json({std1})
})

let PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
   console.log(`tahe server is running and PORT ${PORT}`);
})