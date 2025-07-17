const User = require('../models/userModel');

class UserService {
  static async getAllUsers() {
    return await User.find();
  }

  static async createUser(data) {
    const { username, role, password, companyName } = data;

    // Optional: Add validation here if needed
    if (!username || !role || !password || !companyName) {
      throw new Error('All fields (username, role, password, companyName) are required.');
    }

    const user = new User({
      username,
      role,
      password,
      companyName,
    });

    return await user.save();
  }
}

module.exports = UserService;
