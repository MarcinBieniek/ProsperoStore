const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const path = require('path');

// set dotenv
dotenv.config();

// set app 
const app = express();
app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running on port 8000')
});

// mongoDB connection 
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  })
  .then(() => {console.log('DB connection succesfull')})
  .catch((err) => {console.log('DB error is', err)});

// middleware
app.use(cors({origin: "http://localhost:3000"}))
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(session({ 
  secret: process.env.SECRET,
  store: MongoStore.create(mongoose.connection),
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV == 'production',
  },
}));

// access to storage folder
app.use(express.static(path.join(__dirname, '/client/build')));
app.use(express.static(path.join(__dirname, '/public')));

// import routes
const userRoute = require('./routes/user.routes');
const authRoute = require('./routes/auth.routes');

// use routes
app.use('/api', userRoute);
app.use('/auth', authRoute);

