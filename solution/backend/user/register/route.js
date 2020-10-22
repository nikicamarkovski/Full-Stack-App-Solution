let routes = require('express').Router();
let action = require('./action');


let route = '/register';

routes.post(route , action.createUser);

module.exports = routes;