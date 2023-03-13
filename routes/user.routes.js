const router = require('express').Router();

const usersController = require('../controllers/users.contoller')

router.get('/user/get', usersController.get)

module.exports = router;