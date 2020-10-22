let routes = require('express').Router();
let action = require('./action');
let middleware = require('../../middleware/common');

/// , [middleware.checkToken , middleware.verifyToken]

routes.post('/login'  , action.Login);



module.exports = routes;
