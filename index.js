const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {console.log('DB connection succesfull')})
  .catch((err) => {console.log('DB error is', err)})

app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running on port 8000')
});