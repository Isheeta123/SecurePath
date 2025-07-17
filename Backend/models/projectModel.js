const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  managers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }],
  companyName: { type: String, required: true },
  budget: {
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    description: { type: String },
  },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('Project', projectSchema);