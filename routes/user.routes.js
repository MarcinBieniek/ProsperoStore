const router = require('express').Router();

const usersController = require('../controllers/users.contoller')

router.get('/user/test', usersController.get)

module.exports = router;