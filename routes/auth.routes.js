const router = require('express').Router();
const authMiddleware = require('../utils/authMiddleware');

const auth = require('../controllers/auth.controller');

router.post('/register', auth.register);
router.post('/login', auth.login);
router.get('/user', authMiddleware, auth.getUser);
router.get('/logout', authMiddleware, auth.logout)

module.exports = router;