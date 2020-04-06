const router = require('express').Router();
const Food = require('../controller/food');
const Authentication = require('../middlewares/Authentication');
const Authorization = require('../middlewares/Authorization');

//show all foods
router.get('/', Food.getFoods)

//show one food
router.get('/id', Food.getOneFood)

//add food
router.post('/', Authentication, Food.createFood)

//delete food
router.delete('/:id', [Authentication, Authorization], Food.deleteFood)


module.exports = router
