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
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:8000"],
  methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD', 'DELETE'],
  credentials: true
}))
if(process.env.NODE_ENV !== 'production') {
  app.use(
    cors({
      origin: ['http://localhost:3000'],
      credentials: true,
    })
  );
} 
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(session({ 
  secret: process.env.SECRET,
  store: MongoStore.create(mongoose.connection),
  resave: false,
  saveUninitialized: false,
  /* This cause error in creating user session - no login available
  cookie: {
    secure: process.env.NODE_ENV == 'production',
  },*/
}));

// access to storage folder
app.use(express.static(path.join(__dirname, '/client/build')));
app.use(express.static(path.join(__dirname, '/client/public')));

// import routes
const userRoute = require('./routes/user.routes');
const authRoute = require('./routes/auth.routes');
const productRoute = require('./routes/products.routes');
const orderRoute = require('./routes/order.routes');

// use routes
app.use('/api', userRoute);
app.use('/auth', authRoute);
app.use('/products', productRoute);
app.use('/orders', orderRoute);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});


