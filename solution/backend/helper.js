let jwt = require('jsonwebtoken');
let bcrypt = require('bcryptjs');


loginLogic = (user , password)=>{
     console.log(user , password)
    if(!user) {
        let error = new Error("Wrong Username");
        error.status = 404;
        throw error;
    }else if (!bcrypt.compareSync(password , user.password )) {
    
        let error = new Error("Wrong Password");
        error.status = 404;
        throw error; 
    }else {
       
         var privateKey = 'login'
         let token = jwt.sign({user} ,   privateKey,{ expiresIn: '24h' });
            console.log(token)
              
         let userToSend = {
            user_id : user.user_id,
            username : user.username,
            token:token
        }
        return userToSend;
    }
  
  }


  module.exports = {
    loginLogic
  }