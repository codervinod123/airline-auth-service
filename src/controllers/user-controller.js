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

const getuser=async(req,res)=>{
    try {
        const user=await userService.getUser(req.params.id);
        return res.status(201).json({
            data : user,
            success : true,
            message : 'User are fetched successfully',
            error : {}
        })
    } catch (error) {
        return res.status(500).json({
            data : {},
            success : false,
            message : 'User can not fetched successfully',
            error : error
        })
    }
}

const destroy=async(req,res)=>{
    try {
        const user=await userService.deleteUser(req.params.id);
        return res.status(201).json({
            data : user,
            success : true,
            message : 'User are deleted successfully',
            error : {}
        })
    } catch (error) {
        return res.status(500).json({
            data : {},
            success : false,
            message : 'User can not delete successfully',
            error : error
        })
    }
}

module.exports={
    create,
    destroy,
    getuser
}