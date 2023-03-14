const router = require('express').Router();

const products = require('../controllers/products.controller');

router.get('/', products.getProducts);

module.exports = router;