const {User}=require('../models/index');

class UserRepository{
    
   async createUser(data){
       try {
         const user=await User.create(data);
         return user;
       } catch (error) {
          console.log("Error has occured at repo level while creating user");
          throw {error};
       }
    }

    async userByEmail(userEmail){
      try {
         const user=await User.findOne({where:{email:userEmail}})
         return user;
      } catch (error) {
          console.log("Error has occured at repo level while finding user with email id");
          throw {error};
      }
    }

 
}

module.exports=UserRepository;