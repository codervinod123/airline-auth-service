const express=require('express');
const router=express.Router();

const {AuthRequestValidators,TokenVerification}=require('../../middlewares/index');


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
        TokenVerification.TokenVerification,
        UserController.isAuthenticated    
);

router.get('/isadmin',
            UserController.isAdmin
        );


router.get('/isAirlinebusiness',
            UserController.isAirlinebusiness
) 

router.get('/isCustomer',
    UserController.isCustomer
) 



module.exports=router