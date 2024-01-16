const mongoose=require('mongoose')

const connectDB=async()=>{
    try {
        await mongoose.connect('mongodb+srv://moha1:MvYwladhVrn1FkrE@cluster0.n06tzyl.mongodb.net/?retryWrites=true&w=majority')
        console.log('Sucessfull')
    } catch (err) {
        console.log(err)
    }
}

module.exports=connectDB