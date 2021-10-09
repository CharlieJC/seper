const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const router = express.Router();

// Load User model
const User = require('../../models/user');

// @route GET api/login
// @description Get all articles
// @access Public
router.post('/login', (req, res) => {
  const userLoggingIn = req.body;

  User.findOne({ username: userLoggingIn.username })
    .then((dbUser) => {
      if (!dbUser) {
        return res.json({
          message: 'Invalid Username or Password',
        });
      }
      bcrypt.compare(userLoggingIn.password, dbUser.password)
        .then((isCorrect) => {
          if (isCorrect) {
            const payload = {
              id: dbUser._id,
              username: dbUser.username,
            };
            jwt.sign(
              payload,
              process.env.PASSPORTSECRET,
              { expiresIn: 86400 },
              (err, token) => {
                if (err) return res.json({ message: err });
                return res.json({
                  message: 'Success',
                  token: `Bearer ${token}`,
                });
              },
            );
          } else {
            return res.json({
              message: 'Invalid Username or Password',
            });
          }
        });
    });
});

// @route POST api/register
// @description add/save book
// @access Public
router.post('/register', async (req, res) => {
  const user = req.body;

  const takenUsername = await User.findOne({ username: user.username });

  if (takenUsername) {
    res.json({ messsage: 'Username has already been taken' });
  } else {
    user.password = await bcrypt.hash(req.body.password, 10);

    const dbUser = new User({
      username: user.username.toLowerCase(),
      password: user.password,
      role: req.body.role.toLowerCase(),
    });

    dbUser.save();
    res.json({ message: 'Success' });
  }
});

function verifyJWT(req, res, next) {
  const token = req.headers['x-access-token']?.split(' ')[1];
  if (token) {
    jwt.verify(token, process.env.PASSPORTSECRET, (err, decoded) => {
      if (err) {
        return res.json({
          isLoggedIn: false,
          message: 'Failed to authenticate',
        });
      }
      req.user = {};
      req.user.id = decoded.id;
      req.user.username = decoded.username;
      next();
    });
  } else {
    res.json({ message: 'Incorrect Token Given', isLoggedIn: false });
  }
}

router.get('/getUsername', verifyJWT, (req, res) => {
  res.json({ isLoggedIn: true, username: req.user.username });
});

router.get('/getRole', verifyJWT, (req, res) => {
  res.json({ isLoggedIn: true, username: req.user.role });
});

router.get('/Users', (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch(() => res.status(404).json({ message: 'No Users found' }));
});

router.get('/isUserAuth', verifyJWT, (req, res) => res.json({ isLoggedIn: true, username: req.user.username }));
module.exports = router;
