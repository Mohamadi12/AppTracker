const express=require('express')
require('dotenv').config()
const cors=require('cors')
const connect=require('./config/connectDB')
const routesTracker = require('./routes/routesTracker')
const port=5000
const app=express()




app.use(express.json())
app.use(cors())
app.use('/tracker',routesTracker)
connect()

app.listen(port,(err)=>{
    err? console.log(err):console.log(`Yes, seuccessfull ${port}`)
})