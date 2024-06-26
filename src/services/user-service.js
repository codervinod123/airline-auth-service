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
}

module.exports=UserService