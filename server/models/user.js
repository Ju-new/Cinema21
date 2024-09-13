const mongoose=require("mongoose")


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

const LogInCollection1=new mongoose.model('LogInCollection1',logInSchema1);

module.exports=LogInCollection1;