const jwt=require("jsonwebtoken")
const protect =async(req,res,next)=>{
   let token

   if(req.header.authorization && req.headers.authorization.startsWith("Bearer")){
       try{
           token=req.headers.authorization.split(" ")[1];
           jwt.verify(token,process.env.JWT_SECRET)
           next()
       }
       catch(error){
           res.status(401).send("login failed")
           throw new error ("not authorized,token")

       }
   }
   if(!token)
   {
       res.status(401).send("no tokens")
       throw new error ("not authorized,token")

   }
}
module.exports=protect