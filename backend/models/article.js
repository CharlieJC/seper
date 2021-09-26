const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  Authors: {
    type: String,
    required: true,
  },
  Source: {
    type: String,
    required: true,
  },
  PublicationYear: {
    type: String,
  },
  DOI: {
    type: String,
  },
  SEPractice: {
    type: String,
  },
});

module.exports = mongoose.model('article', ArticleSchema);
