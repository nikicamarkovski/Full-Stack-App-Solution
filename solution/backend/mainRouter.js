const mainRouter = require('express').Router();
const loginRoute = require('./user/login/route');
const registerRoute = require('./user/register/route');
const postsRoutes = require('./posts/route');
const categoryRoutes = require('./Category/route');
mainRouter.use(loginRoute);
mainRouter.use(registerRoute);
mainRouter.use(postsRoutes);
mainRouter.use(categoryRoutes);

module.exports = mainRouter;