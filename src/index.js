const express = require('express');
const bodyParser = require('body-parser')

const { PORT } = require('./config/serverConfig')

const apiRoutes = require('./routes/index')


const AuthService = () => {



    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/api', apiRoutes)

    const { User,Role } = require('./models/index');


    const UserService=require('./services/user-service');
    const userService=new UserService();

    const UserRepository=require('./repository/user-repository');
    const userRepository=new UserRepository();

    const db=require('./models/index');

    app.listen(PORT, async () => {  
       
    // const u1=await User.findByPk(29);
    // const r1=await Role.findByPk(1);

    // u1.addRole(r1);
    // const User1=await u1.getRoles();
    // console.log(User1);
    
        console.log(`App is running on port ${PORT}`);
    })

}

AuthService();
