const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
  assignedTo: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }],
  status: { type: String, enum: ['pending', 'progressing', 'complete'], default: 'pending' },
  approvalStatus: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  rejectionComment: { type: String },
  dueDate: { type: Date, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('Task', taskSchema);