const express= require("express")
const router = express.Router();
const path = require("path")
const hbs= require("hbs")
const LogInCollectionction1 = require("../models/User")

const templatePath = path.join(__dirname, '../templates')


router.use(express.json())
router.set("view engine", "hbs")
router.set("views", templatePath)
router.use(express.urlencoded({extended:false}))


router.get("/",(req,res)=>{
    res.render("login")
})

router.get("/signup",(req,res)=>{
    res.render("signup")
})


router.post("/signup",async (req,res)=>{

    const data=await LogInCollectionction1.create({
        username:req.body.username,
        password:req.body.password
    });

    return res.status(200).json(LogInCollectionction1);
});

router.get("/login",(req,res)=>{
    res.render("login");
});

router.post("/login",async (req,res)=>{

   try{
    const check= await LogInCollectionction1.findOne({username:req.body.username})
    if (check){
        if (check.password===req.body.password){
            res.render("home")
          } else{
            res.status(400).json({error:"password doesnt match"});
        }
       }else{
        res.status(400).json({error: "User doesnt exist"});
       }
    }


   catch(error){
    res.status(400).json({erorr});
   }
})


module.exports = router;