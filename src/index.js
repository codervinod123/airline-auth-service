const express=require('express');
const bodyParser=require('body-parser')

const {PORT}=require('./config/serverConfig')

const apiRoutes=require('./routes/index')

const AuthService=()=>{


     
    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

     app.use('/api', apiRoutes)

   
    app.listen(PORT,async()=>{
        console.log(`App is running on port ${PORT}`);
    })
  
}

AuthService();
