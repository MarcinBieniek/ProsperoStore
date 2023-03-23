const router = require('express').Router();
const authMiddleware = require('../utils/authMiddleware');

const order = require('../controllers/orders.controller');

router.get('/', order.get);
router.post('/', order.add);

module.exports = router;