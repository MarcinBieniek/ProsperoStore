const Product = require('../models/product.model');

// Get all products

exports.getProducts = async (req, res) => {
  try {
    const results = await Product.find();
    res.send(results)
  }catch (error) {
    console.log(error.message)
  }
}