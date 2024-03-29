const mongoose=require('mongoose')

const trackerMoney=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    datetime:{
        type: Date,
        required:true
    }
})

module.exports=mongoose.model('tracker',trackerMoney)