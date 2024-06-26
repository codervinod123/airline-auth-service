const UserRepository=require('../repository/user-repository')

class UserService{
      constructor(){
         this.userRepository=new UserRepository();
      }

      async createUser(data){
        try {
            const user=await this.userRepository.createUser(data);
            return user;
        } catch (error) {
            console.log("Error occured at service layer");
            throw {error};
        }
      }

      async getUser(userId){
        try {
           const user=await this.userRepository.getUser(userId);
           return user;
        } catch (error) {
          console.log("Error occured at service layer");
          throw {error};
        }
      }

      async deleteUser(userId){
        try {
              return await this.userRepository.deleteUser(userId);
        } catch (error) {
            console.log("Error occured at service layer");
            throw {error};
        }
      }
}

module.exports=UserService