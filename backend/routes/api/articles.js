const express = require('express');
const articles = require('./dummydata/articleData');

const router = express.Router();

// Load Book model
// const Book = require('../../models/Article');

// @route GET api/books/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('article api route testing!'));

// @route GET api/practices
// @description Get all practices
// @access Public
router.get('/practices', (req, res) => {
  res.send(JSON.stringify(articles));
});

module.exports = router;
