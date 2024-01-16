const express=require('express')
const routesTracker=express.Router()
const {test,transaction}=require('../controller/controllerTracker')


routesTracker.get('/transactions',test)
routesTracker.post('/transaction',transaction)



module.exports=routesTracker