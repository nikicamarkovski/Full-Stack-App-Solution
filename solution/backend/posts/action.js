const db = require('../database');
let jwt = require('jsonwebtoken');
const {Post} = require('../Models/Post');
createPostQuery = (userId  , body)=> {
    const query = "insert into Post(title , content , user_id, category_id)\
     values(? , ? , ? , (select category_id from Category where name = ?) )";


     return new Promise ((resolve , reject) => {
        db.query(query , [ body.title  ,  body.content , userId , body.category] , (error , results , fields)=> {
        
            if (error) reject(error);
            else resolve(results);
        });
   });
}
createPost = async (req , res)=> {
try {
    let body = req.body;

    let tokenData = jwt.verify(req.token, 'login', (error, authorizedData) => {
        return authorizedData
    });
      
      await createPostQuery(tokenData.user.user_id , body)
    res.json('Good Job!').status(200);
} catch (error) {
    
}
}
getAllPostsForSpecificUserQuery = (id)=> {
    const query = 'select * from Post join User on Post.user_id = User.user_id\
     join Category on Post.category_id = Category.category_id where User.user_id = ?';
    return new Promise((resolve, reject) => {

        db.query(query, [id] , (error, results, fields) => {
            if (error) reject(error)
            else resolve(results);
        });
    });
}

getAllPostsForSpecificUser = async (req, res , next) => {
  
   

    try {
        let tokenData = jwt.verify(req.token, 'login', (error, authorizedData) => {
            return authorizedData
        });
        
        let userPosts = await getAllPostsForSpecificUserQuery(tokenData.user.user_id)
          
        let posts = userPosts.map(post => {
            return new Post( post.post_id , post.title , post.content , post.name)
       
        }) 
  
        res.json(posts);
    } catch (error) {
        res.status(500).send(error)
    }
}


getAllPostsQuery = (id)=> {
    const query = 'select * from Post join Category on Post.category_id = Category.category_id;';
    return new Promise((resolve, reject) => {

        db.query(query, [id] , (error, results, fields) => {
            if (error) reject(error)
            else resolve(results);
        });
    });
}



getAllPosts = async (req, res , next) => {
  
   

    try {
       
        
        let userPosts = await getAllPostsQuery();
        let posts = userPosts.map(post => {
            return new Post( post.post_id , post.title , post.content , post.name)
       
        }) 
  
        res.json(posts);
    } catch (error) {
        res.status(500).send(error)
    }
}


module.exports = {
    getAllPostsForSpecificUser,
    createPost ,
    getAllPosts
}