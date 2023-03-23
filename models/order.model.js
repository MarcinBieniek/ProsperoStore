const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  username: {type: String, required: true},
  products: {type: Array, required: true},
  date: {type: String, required: true},
  price: {type: String, required: true}
});

module.exports = mongoose.model('Order', orderSchema);