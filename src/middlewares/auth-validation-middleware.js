const AuthValidation=(req,res,next)=>{
     
      if( 
         !req.body.email ||
         !req.body.password 
      ){
        return res.status(501).json({
            data:null,
            success:false,
            message:'Email or Password is missing',
            error:"Email or Password is missing",
        })
      }

      next();
}

module.exports={
    AuthValidation 
}