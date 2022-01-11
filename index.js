const express = require('express')
// const router = require('./routes/myRouter')
const path = require('path')
const app = express()
app.use(express.static(path.join(__dirname,'public')))

// app.use(router)

app.listen(8080,()=>{
    console.log("Start Server Port 8080");
})