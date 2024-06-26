const {User}=require('../models/index');

class UserRepository{
    
   async createUser(data){
       try {
         const user=await User.create(data);
         return user;
       } catch (error) {
          console.log("Error has occured at repo level");
          throw {error};
       }
    }

    async getUser(userId){
      try {
          const user=await User.findByPk(userId);
          return user;
      } catch (error) {
         console.log("Error has occured at repo level");
         throw {error};
      }
    }

    async deleteUser(userId){
      try {
           return await User.destroy({
            where:{
               id:userId
            }
           })
      } catch (error) {
         console.log("Error has occured at repo level");
         throw {error};
      }
    }
 
}

module.exports=UserRepository;