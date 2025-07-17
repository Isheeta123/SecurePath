const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  description: { type: String, required: true },
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

budgetSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

budgetSchema.pre('findOneAndUpdate', function(next) {
  this.set({ updatedAt: Date.now() });
  next();
});

module.exports = mongoose.model('Budget', budgetSchema);