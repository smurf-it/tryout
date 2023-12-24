//----------------------------
/*app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if the username and password are valid
  //if (username == 'testuser' && password == 'testpassword') {
  if (username.equals('testuser') && password.equals('testpassword')) {
    // Set the session cookie
    res.cookie('session', '1234567890');

    // Redirect the user to the homepage
    res.redirect('/');
  } else {
    // If the username or password are invalid, show an error message
    res.status(401).send('Invalid username or password\n');
  }
});*/


/*
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("db1", "mpanao", "1234", {
  host: process.env.DB_HOST,
  dialect: 'postgres'
});

const express = require('express');
const userRoutes = require('./routes/userRoutes');
const config = require('./config/config');

const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});




app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if the username and password are valid
  if (username === 'testuser' && password === 'testpassword') {
    // Set the session cookie
    res.cookie('session', '1234567890');

    // Redirect the user to the homepage
    res.redirect('/');
  } else {
    // Return an error message if the username or password is incorrect
    res.status(401).send('Invalid username or password\n');
  }
}); */

//-----------------------------------------------------
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("db1", "mpanao", "1234", {
  host: process.env.DB_HOST,
  dialect: 'postgres'
});

const express = require('express');
const userRoutes = require('./routes/userRoutes');
const config = require('./config/config');

const app = express();

// Use the express.urlencoded() middleware to parse the request body as application/x-www-form-urlencoded data
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if the username and password are valid
  if (username === 'testuser' && password === 'testpassword') {
    // Set the session cookie
    res.cookie('session', '1234567890');

    // Redirect the user to the homepage
    res.redirect('/');
  } else {
    // Return an error message if the username or password is incorrect
    res.status(401).send('Invalid username or password\n');
  }
});
