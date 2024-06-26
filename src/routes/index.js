const express=require('express');
const router=express.Router();

const appRouter=require('./v1/index');

router.use('/v1' ,appRouter);

module.exports=router