const UserRepository = require('../repository/user-repository')
var jwt = require('jsonwebtoken');
const bcrypt=require('bcrypt')

class UserService {

  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(data) {
    try {
      const user = await this.userRepository.createUser(data);
      return user;
    } catch (error) {
      console.log("Error occured at service layer");
      throw { error };
    }
  }

  async signIn(email,password){
      try {
       
        const user=await this.userRepository.userByEmail(email);
      
        const checkPass=await this.CheckPassword(password,user.password);

        if(!checkPass){
          console.log("Error occured at service layer bhaiya");
          throw { error };
        }
       
        const token=await this.createToken({email:user.email,id:user.id});
        return token;

        } catch (error) {
        console.log("Error occured at service layer bhaiya");
        throw { error };
      }
  }


  async createToken(user) {
    try {
      const jwtToken = jwt.sign(user, 'vinod');
      return jwtToken;
    } catch (error) {
      console.log("Error occured at service layer");
      throw { error };
    }
  }

  async verifyToken(token) {
    try {
      const response = jwt.verify(token,'vinod');
      return response;
    } catch (error) {
      console.log("Error occured at service layer");
      throw { error };
    }
  }

  async CheckPassword(userInputPlainPassword , encryptedPassword){
      try {
         const res= await bcrypt.compare(userInputPlainPassword, encryptedPassword);
         return res;
      } catch (error) {
        console.log("Error occured at service layer in password matching");
        throw { error };
      }
  }



}

module.exports = UserService