const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next){
//    Get token from header
    const token = req.header('x-auth-token');

//    Check if no token
    if(!token) {
        return res.status(401).json({msg: 'You must be logged in to carry out this operation'});
    }

//    Verify Token:
    try{
        const decoded = jwt.verify(token, config.get('jwtSecretDoc'));

        req.prescription = decoded.prescription;
        next();
    } catch(err){
        res.status(401).json({msg: 'Auth Token Invalid!'});

    }
}