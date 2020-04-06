const router = require('express').Router();
const User = require('../controller/user');

//register
router.post('/', User.register)

//login
router.post('/login', User.login)

module.exports = router
