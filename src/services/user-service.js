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
      const response = jwt.verify(token,'SECRET_KEY_');
      return response;
    } catch (error) {
      console.log("Error occured at service layer");
      throw { error };
    }
  }

  async CheckPassword(userInputPlainPassword , encryptedPassword){
      try {
         return await bcrypt.compare(userInputPlainPassword, encryptedPassword);
      } catch (error) {
        console.log("Error occured at service layer in password matching");
        throw { error };
      }
  }



}

module.exports = UserService