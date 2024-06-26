const UserService=require('../services/user-service')
const userService=new UserService();

const create=async(req,res)=>{
    try {
        const user=await userService.createUser(req.body);
        return res.status(201).json({
            data : user,
            success : true,
            message : 'User are created successfully',
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
            message:"Ho gaya mata ki kripa se"
        })
    } catch (error) {
        return res.status(500).json({
            data:null,
            success:false,
            error:error,
            message:"Nai hua "
        }) 
    }
}


module.exports={
    create,
    signin
}