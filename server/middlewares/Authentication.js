const jwt = require('jsonwebtoken');

function authentication(req, res, next) {
    let token = req.headers.token
    try {
        let decode = jwt.verify(token, 'rahasia')
        req.userdata = decode
        next()
    } catch (error) {
        console.log(error);
    }
}


module.exports = authentication
