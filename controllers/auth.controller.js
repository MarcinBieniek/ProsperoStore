const User = require('../models/user.model');
const CryptoJS = require("crypto-js");

exports.register = async (req, res) => {
  try {
    const { login, password, email } = req.body;

    if (login && typeof login === 'string' && password && typeof password ==='string' && email && typeof email === 'string'){
      const userWithLogin = await User.findOne({ login });
      if (userWithLogin) {
        return res.status(409).send({ message: 'User with login ' + login + ' already exists'});
      }
      const user = await User.create({ 
        login, 
        password: CryptoJS.AES.encrypt(
          password,
          process.env.PASS_SEC
        ).toString(),
        email
      });
      res.status(201).send({ message: 'User ' + user.login + ' created' })
    } else {
      res.status(400).send({ message: 'Bad request man'})
    }
  } catch (err) {
    res.status(500).send({ message: err.message })
  }
}

exports.login = async (req, res) => {

  try{
    const { login, password } = req.body;

    if (login && typeof login === 'string' && password && typeof password === 'string') {
      const user = await User.findOne({ login });

      const hashedPassword = CryptoJS.AES.decrypt(
        user.password,
        process.env.PASS_SEC
      )
      const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

      if (!user) {
        res.status(400).send({message: 'Login or password are incorrect'});
      } else {
        if (
          (password === originalPassword) 
          ) {
          req.session.login = user.login;
          req.session.save();

          res.status(200).send({ message: 'Login successful' });
        } else {
          res.status(400).send({ message: 'Login or password are incorrect'});
        }
      }
    } else {
      res.status(400).send({ message: 'Bad request' });
    }
  } catch (err) {
    res.status(500).send({ message: err.message})
  }
}

exports.getUser = async (req, res) => {
  res.send({ login: req.session.login })  
}

exports.logout = async (req, res) => {
  try {
      req.session.destroy();
      return res
          .status(200)
          .send({ message: 'Session ended' });
  } catch (err) {
      return res
          .status(500)
          .send({ message: err.message });
  }
}