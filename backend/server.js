const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');
// routes
const articles = require('./routes/api/articles');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));

// use Routes
app.use('/api/articles', articles);

// Accessing the path module

// Step 1:
app.use(express.static(path.resolve(__dirname, '../frontend/build')));
// Step 2:
app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});
