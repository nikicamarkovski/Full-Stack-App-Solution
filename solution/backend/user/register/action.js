const db = require('../../database');
const helper = require('../../helper');
const bcrypt = require('bcryptjs');
const { getUserByUsernameQuery } = require('../login/action')
createUserQuery = (username , passHash) => {
    const  query = 'insert into User (username , password) values (? , ?)';


    return new Promise ((resolve , reject) => {
        db.query(query , [username , passHash], (error , results , fields)=> {
        
            if (error) reject(error);
            else resolve(results);
        });
   });
}
createUser = async (req, res , next) => {
    let body = req.body;
   

    try {
        
        let user = await getUserByUsernameQuery(body.username);
      
        if(user.length !== 0) {
           let error = new Error('Username already exists, please choose another');
           error.status = 404;
           next(error)
        }
        else if(body.password.length == 0) {
            let error = new Error('Password is required');
            error.status = 404;
            next(error);
        }
        else {
            
            const passHash = bcrypt.hashSync(body.password, 5);
           await createUserQuery(body.username , passHash)
            res.json("Success , Now try to Login").status(200);
        }
        
      
    } catch (error) {
        res.status(500).send(error)
    }
}


module.exports = {
    createUser
}