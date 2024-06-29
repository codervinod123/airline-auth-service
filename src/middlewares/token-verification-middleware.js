const TokenVerification=(req,res,next)=>{
    if(!req.headers['access-token']){
        return res.status(500).json({
            data:null,
            success:false,
            error:"Token is not provided",
            Message:'Token is not proviced'
        })
    }
    next();
}

module.exports={
    TokenVerification
}