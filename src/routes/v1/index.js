const express=require('express');
const router=express.Router();

const UserController=require('../../controllers/user-controller');

router.post('/user', UserController.create);
router.post('/signin',UserController.signin);


module.exports=router