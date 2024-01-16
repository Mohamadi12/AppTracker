const express=require('express')
const trackerMoney=require('../model/trackerMoney')


exports.test=async(req,res)=>{
    try {
        const tester=await trackerMoney.find()
        res.status(200).json({msg:'Voici la liste',tester})
    } catch (error) {
       console.log(error) 
       res.status(500).json({msg:error.message})
    }
}

exports.transaction=async(req,res)=>{
    try {
        const posted=new trackerMoney(req.body)
        await posted.save()
        res.status(200).json({msg:'Poster avec succes',posted})
    } catch (error) {
        console.log(error) 
        res.status(500).json({msg:error.message})
    }
}