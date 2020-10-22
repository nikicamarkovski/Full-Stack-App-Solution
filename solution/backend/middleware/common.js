
const jwt = require('jsonwebtoken');

checkToken = (req, res, next) => {
    const header = req.headers['authorization'];

    if(typeof header !== 'undefined') {
        const bearer = header.split(' ');
        const token = bearer[1];

        req.token = token;
        next();
    } else {
        res.sendStatus(403)
    }
}
verifyToken = (req, res,next) => {
    jwt.verify(req.token, 'login', (err, authorizedData) => {
        if(err){
            res.status(403).send({message:'Invalid token'});
        } else {
            next()
        }
    })
}

WrongRoute = (req, res, next) => {
    var error = new Error('Not found , please try with another route!');
    error.status = 404;
    next(error);
};
errorHandler = (err, req, res, next) => {
    var errObj = {
        status: err.status,
        error: {
            message: err.message
        }
    }
    res.status(err.status || 500).send(errObj);
};



module.exports = {
    errorHandler,
    WrongRoute , 
    checkToken,
    verifyToken
}