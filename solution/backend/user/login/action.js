const db = require('../../database');
const helper = require('../../helper');



getUserByUsernameQuery = async (username) => {
   
    const  query = 'select * from User where username = ?';


    return new Promise ((resolve , reject) => {
        db.query(query , [username], (error , results , fields)=> {
        
            if (error) reject(error);
            else resolve(results);
        });
   });
}


Login=async(req,res)=>{
    let username = req.body.username;
    let password = req.body.password;
 
      try {
    
      
        let  user = await getUserByUsernameQuery(username);
        console.log();
        let login = helper.loginLogic(user[0], password);
        res.json(login).status(200);
      
    
    } catch (error) {
        res.status(404).json(error.message);
        
    }
}

module.exports = {
    Login,
    getUserByUsernameQuery
 
}