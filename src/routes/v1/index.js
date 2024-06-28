const express=require('express');
const router=express.Router();

const {AuthRequestValidators}=require('../../middlewares/index');

const UserController=require('../../controllers/user-controller');

router.post('/signup',
    AuthRequestValidators.AuthValidation,
     UserController.create
    );

router.post('/signin',
    AuthRequestValidators.AuthValidation,
    UserController.signin
);

router.get('/isauthenticated',
            UserController.isAuthenticated    
);




module.exports=router