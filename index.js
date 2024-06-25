const express=require('express');

const {PORT}=require('./src/config/serverConfig')

const AuthService=()=>{

    const app=express();
    app.listen(PORT,()=>{
        console.log(`App is running on port ${PORT}`);
    })
  
}

AuthService();
