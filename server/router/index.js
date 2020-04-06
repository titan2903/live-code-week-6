const router = require('express').Router();
const User = require('./users');
const Food = require('./foods');

router.use('/user', User)
router.use('/food', Food)

module.exports = router
