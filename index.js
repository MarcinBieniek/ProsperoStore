const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// set dotenv
dotenv.config();

// set app 
const app = express();
app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running on port 8000')
});

// mongoDB connection 
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {console.log('DB connection succesfull')})
  .catch((err) => {console.log('DB error is', err)});

// middleware
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

// import routes
const userRoute = require('./routes/user.routes');
const authRoute = require('./routes/auth.routes');

// use routes
app.use('/api', userRoute);
app.use('/auth', authRoute);
