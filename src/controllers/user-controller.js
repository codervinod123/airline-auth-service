const UserService=require('../services/user-service')
const userService=new UserService();

const create=async(req,res)=>{
    try {
        const user=await userService.createUser(req.body);
        return res.status(201).json({
            data : user,
            success : true,
            message : 'User created successfully',
            error : {}
        })
    } catch (error) {
        return res.status(500).json({
            data : {},
            success : false,
            message : 'User can not created successfully',
            error : error
        })
    }
}

const signin=async(req,res)=>{
    try {
        const user=await userService.signIn(req.body.email,req.body.password);
        return res.status(200).json({
            data:user,
            success:true,
            error:{},
            message:"User has signed in Successfully"
        })
    } catch (error) {
        return res.status(500).json({
            data:null,
            success:false,
            error:error,
            message:"User are not able to sign in successfully"
        }) 
    }
}

const isAuthenticated=async(req,res)=>{
       try {
            const token=req.headers['access-token'];
            const isVerified=await userService.isAuthenticated(token);
            return res.status(200).json({
                data:isVerified,
                success:true,
                message:'Token athenticated successfully',
                error:null
            });
       } catch (error) {
        return res.status(500).json({
            data:null,
            success:false,
            error:error,
            message:"User are not Authenticated"
        }) 
       }
}

const isAdmin=async(req,res)=>{
    try {
         const isAdmin=await userService.isAdmin(req.body.id);
         return res.status(200).json({
             data: isAdmin,
             success:true,
             message:'User Role has fetched successsfully',
             error:null
         });
    } catch (error) {
     return res.status(500).json({
         data:null,
         success:false,
         error:error,
         message:"User role can not verified"
     }) 
    }
}


module.exports={
    create,
    signin,
    isAuthenticated,
    isAdmin
}