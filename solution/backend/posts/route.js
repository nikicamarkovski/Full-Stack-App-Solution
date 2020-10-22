let routes = require('express').Router();

let {checkToken , verifyToken} = require('../middleware/common');
const { getAllPostsForSpecificUser , createPost , getAllPosts} = require('./action');

let route = '/posts';

routes.get(route , [ checkToken , verifyToken ] , getAllPostsForSpecificUser);
routes.post(route , [ checkToken , verifyToken ] , createPost);
routes.get(`${route}/all` ,  [ checkToken , verifyToken ] , getAllPosts);
module.exports = routes;