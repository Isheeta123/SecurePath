const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const config = require('../config/env');

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username: username.toLowerCase() });
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign(
      { id: user._id, username: user.username, role: user.role, companyName: user.companyName },
      config.jwtSecret,
      { expiresIn: '1h' }
    );

    res.json({ token, user: { id: user._id, username: user.username, role: user.role, companyName: user.companyName } });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};