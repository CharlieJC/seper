const express = require('express');
const practices = require('./dummydata/articleData');

const router = express.Router();

// Load Book model
const Article = require('../../models/article');

// @route GET api/test
// @description tests books route
// @access Public
router.get('/test', (req, res) => res.send('article api route testing!'));

// @route GET api/articles
// @description Get all articles
// @access Public
router.get('/articles', (req, res) => {
  Article.find()
    .then((articles) => res.json(articles))
    .catch(() => res.status(404).json({ nobooksfound: 'No Articles found' }));
});

// @route POST api/articles
// @description add/save book
// @access Public
router.post('/articles', (req, res) => {
  Article.create(req.body)
    .then((articles) => res.json(articles))
    .catch(() => res.status(400).json({ error: 'Unable to add this article' }));
});

// @route GET api/practices
// @description Get all practices
// @access Public
router.get('/practices', (req, res) => {
  res.send(JSON.stringify(practices));
});

module.exports = router;
