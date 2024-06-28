const express = require('express');
const bodyParser = require('body-parser')

const { PORT } = require('./config/serverConfig')

const apiRoutes = require('./routes/index')


const AuthService = () => {



    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/api', apiRoutes)

    const { User } = require('./models/index');

    const UserService=require('./services/user-service');
    const userService=new UserService();

    const UserRepository=require('./repository/user-repository');
    const userRepository=new UserRepository();



    app.listen(PORT, async () => {  
        // await User.destroy({where:{id:14}});
        console.log(`App is running on port ${PORT}`);
    })

}

AuthService();
