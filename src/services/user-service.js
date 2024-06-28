const UserRepository = require('../repository/user-repository')
var jwt = require('jsonwebtoken');
const bcrypt=require('bcrypt')
const {JWT_SECRET}=require('../config/serverConfig')
const {User}=require('../models/index');

class UserService {

  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(data) {
    try {
      const user = await this.userRepository.createUser(data);
      return user;
    } catch (error) {
      console.log("Error occured at service layer while creating user");
      throw { error };
    }
  }

  async signIn(email,password){
      try {  
        const user=await this.userRepository.userByEmail(email);   
        const checkPass=await this.CheckPassword(password,user.password);
        if(!checkPass){
          console.log("Error occured at service layer while matchind pass");
          throw { error };
        }
       
        const token=await this.createToken({email:user.email,id:user.id});
        return token;

        } catch (error) {
        console.log("Error occured at service layer");
        throw { error };
      }
  }

  async isAuthenticated(token){
    try {
          const isVerified=await this.verifyToken(token);
          if(!isVerified){
             console.log("Error occured at service layer while verification");
             throw { error };
          }

          const isValidUser=await this.userRepository.userByEmail(isVerified.email);
          if(!isValidUser){
            console.log("Error occured at service layer while verification");
            throw { error };
          }

          return isVerified;
    } catch (error) {
         console.log("Error occured at service layer during token verification user is not available in DB ");
         throw { error };
    }
  }

  

  async createToken(user) {
    try {
      const jwtToken = jwt.sign(user, JWT_SECRET,{expiresIn:'1d'});
      return jwtToken;
    } catch (error) {
      console.log("Error occured at service layer while creating token");
      throw { error };
    }
  }

  async verifyToken(token) {
    try {
      const response = jwt.verify(token,JWT_SECRET);
      return response;
    } catch (error) {
      console.log("Error occured at service layer while verifying token");
      throw { error };
    }
  }

  async CheckPassword(userInputPlainPassword , encryptedPassword){
      try {
        return await bcrypt.compare(userInputPlainPassword, encryptedPassword);
      } catch (error) {
        console.log("Error occured at service layer while password matching");
        throw { error };
      }
  }



}

module.exports = UserService