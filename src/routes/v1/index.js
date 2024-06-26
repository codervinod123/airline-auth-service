const express=require('express');
const router=express.Router();

const {AuthRequestValidators}=require('../../middlewares/index');

const UserController=require('../../controllers/user-controller');

router.post('/user',
    AuthRequestValidators.AuthValidation,
     UserController.create
    );
router.post('/signin',
    AuthRequestValidators.AuthValidation,
    UserController.signin
);


module.exports=router