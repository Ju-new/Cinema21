const mongoose=require("mongoose")
//

mongoose.connect("mongodb://127.0.0.1:27017/LoginForm")
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})

const logInSchema1=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const LogInCollection1=new mongoose.model('LogInCollection1',logInSchema1)

module.exports=LogInCollection1