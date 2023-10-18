// const user = require("../model/schema")
const Jwt =  require("jsonwebtoken")
const user = require("../Schema")
const bcrypt = require('bcrypt')



const tokens=async(req,res)=>{
    const{username,email,password,role}=req.body

    const salt=await bcrypt.genSalt(10)
    const hashpassword=await bcrypt.hash(password,salt)
    const checkadminname=await user.findOne({username})


    

if(checkadminname){

    
    return res.json(  {  
        name: "user exist"
      })
        

    }
    else{
       


          const userDetail=await user.create({
            username,
            email,
            password:hashpassword,
            role
            
        })
        res.json({
            Id:userDetail._id,
            username:userDetail.username,
            password:hashpassword,
            email:userDetail.email,
            role:userDetail.role
        })
       
       
        
    }
   
       
}


 

    
module.exports=tokens