const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = async (req, res) => {
  const { username, password } = req.body;

  const existingUser = await User.findOne({ where: { username } });
  if (existingUser) return res.status(400).send('Username already exists.');

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = await User.create({ username, password: hashedPassword });

  res.send(newUser);
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ where: { username } });
  if (!user) return res.status(400).send('Invalid username or password.');

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) return res.status(400).send('Invalid username or password.');

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.header('x-auth-token', token).send(token);
};
