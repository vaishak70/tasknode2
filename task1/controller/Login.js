const bcrypt = require("bcrypt")
const user = require("../Schema")
const jwt = require("jsonwebtoken")



const adminlogin=async(req,res)=>{

    const {username,email,password}=await req.body
    const checkadminname=await user.findOne({username})
    
   
    
    
    if(checkadminname){
               
             const checkpass=await checkadminname.password 
             const bcryptpass=await bcrypt.compare(password,checkpass)    
             console.log(bcryptpass)   
             if(bcryptpass ==true){


               const token= jwt.sign({id:user._id},`${process.env.JWT_SECRET}`,{
                  expiresIn:"1d"})
                 
              res.json({
                 
               token

            })
              }
               
               
           
           else{
            return res.json({
               message:"password worng"
           })
            
           }
        }
        
        else{
         return res.json({
            message:"email wrong" 
         })
             
            
        }
    }
    
    module.exports=adminlogin
    
