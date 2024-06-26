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

    app.listen(PORT, async () => {

        //   const jwt=await userService.createJWT({email:'Vinodpr737947',id:1});
        //   console.log(jwt);
        //   const verifyToken=await userService.verifyJWT(jwt,'vinod');
        //   console.log(verifyToken);
        //   const user=await User.findByPk(6);
        //   console.log(user);
        //   const passwordMatch=await userService.matchPassword('vinod123',user.password);
        //   console.log(passwordMatch); 
        //   const user = await User.findByPk(1,
        //     {
        //         attributes: ['email', 'id']
        //     });

          
            //  jwt.sign({ email: user.email , id:user.id }, 'VINOD' , function(err, token) {
            //     console.log(token);
                
            //     jwt.verify(token, 'VINOD', function(err, decoded) {
            //         console.log(decoded) // bar
            //     });
                
            //  });


        
        console.log(`App is running on port ${PORT}`);
    })

}

AuthService();
