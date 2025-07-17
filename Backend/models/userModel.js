const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, lowercase: true },
  role: [{
    type: String,
    enum: ['admin', 'manager', 'employee'],
    required: true
  }],
  companyName: { type: String, required: true },
  password: { type: String, required: true },
});

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

module.exports = mongoose.model('User', userSchema);