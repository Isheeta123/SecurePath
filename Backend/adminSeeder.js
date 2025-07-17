require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/userModel');
const { connectDB } = require('./config/db');
const { logger } = require('./utils/logger');

const seedAdmin = async () => {
  try {
    await connectDB();

    await User.deleteMany({}); // Clear users collection
    logger.info('Cleared users collection');

    const adminData = {
      username: 'admin',
      role: ['admin'],
      companyName: 'Admin Company',
      password: 'admin123',
    };

    const admin = new User(adminData);
    const savedUser = await admin.save();
    logger.info('Admin user created successfully:', savedUser);
    process.exit(0);
  } catch (error) {
    logger.error('Error seeding admin user:', error);
    process.exit(1);
  }
};

seedAdmin();