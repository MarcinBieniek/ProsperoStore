const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: {type: Number, required: true},
  title: {type: String, required: true},
  model: {type: String, required: true},
  desc: {type: String, required: true},
  category: {type: String, required: true},
  producer: {type: String, required: true},
  price: {type: String, required: true},
  amount: {type: Number, required: true},
  color: {type: String, required: true},
  width: {type: Number, required: true},
  height: {type: Number, required: true},
  img: {type: String, required: true},
  sale: {type: Boolean, required: true},
  top: {type: Boolean, required: true},
});

module.exports = mongoose.model('Product', productSchema);