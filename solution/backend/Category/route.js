let routes = require('express').Router();
let {getAllCategories , createCategory} = require('./action');
let {checkToken , verifyToken } = require('../middleware/common');

let route = '/categories';

// [ checkToken , verifyToken ] , 
routes.get(route ,getAllCategories);
routes.post(route , [ checkToken , verifyToken ] , createCategory);

module.exports = routes;