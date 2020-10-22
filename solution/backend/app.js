const express = require('express');
const middleware = require('./middleware/common');
const bodyParser = require('body-parser');
const jwt = require('express-jwt');
const unless = require('express-unless');
const db = require('./database');
const mainRouter = require('./mainRouter');

const port = 5000;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(mainRouter);
app.use(jwt({ secret: 'login' ,  algorithms: ['HS256']}).unless({path: ['/login']}));
app.use(middleware.WrongRoute);
app.use(middleware.errorHandler);


app.listen(port, ()=> {
    console.log(`API is listenig on port ${port}!`);
})