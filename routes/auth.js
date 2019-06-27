const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookie = require('cookie');
const { Router } = require('express');

const checkAuth = require('../middleware/cheackAuth');
const Admin = require('../models/admin');

const router = Router();

router.get('/register', (req, res) => res.render('register'));

router.post('/register', (req, res) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if(err) {
      return res.status(500).json({
        error: err
      });
    } else {
      const admin = new Admin({
        email: req.body.email,
        password: hash
      })
      .save()
      .then(result => {
        console.log(result);
        res.render('register',{
          msg: 'success'
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
    }
  });
});

router.get('/auth', (req, res) => res.render('auth'));

router.post('/auth', (req, res) => {
  Admin.findOne({email: req.body.email})
  .exec()
  .then(user => {
    bcrypt.compare(req.body.password, user.password, (err, result) => {
      if(err) {
        return res.status(401).json({
          message: 'Auth failed'
        });
      }
      if(result) {
        const token = jwt.sign(
          {
            email: user.email,
            userId: user._id
          },
          "secret",
          {
            expiresIn: '1h'
          }
        );
        res.setHeader('Set-Cookie', cookie.serialize('authorization', `Bearer ${token}`, {
          httpOnly: true,
          maxAge: 60 * 60 * 24 * 7,
        }));
        res.redirect('suka');
      }
    });
  })
  .catch(err => {
    res.status(500).json({
      error: err
    });
  });
});

router.get('/suka', checkAuth, (req, res) => {
  res.json({
    say: 'hello'
  });
});

module.exports = router;
