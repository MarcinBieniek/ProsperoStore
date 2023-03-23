const Order = require('../models/order.model');

exports.add = async (req, res) => {
  
  const newOrder = new Order(req.body)
  
  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
}

exports.get = async (req, res) => {
  try {
    const results = await Order.find();
    res.send(results)
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
}