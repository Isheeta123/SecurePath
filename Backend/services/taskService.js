const Task = require('../models/taskModel');
const Project = require('../models/projectModel');

class TaskService {
  static async getAllTasks(userId, companyName, role) {
    if (role.includes('employee')) {
      return await Task.find({ assignedTo: userId, companyName }).populate('projectId createdBy assignedTo');
    }
    return await Task.find({ companyName }).populate('projectId createdBy assignedTo');
  }

  static async createTask(data, companyName, createdBy) {
    const project = await Project.findById(data.projectId);
    if (!project) throw new Error('Project not found');
    const task = new Task({ ...data, companyName, createdBy });
    return await task.save();
  }

  static async updateTaskStatus(id, status, userId, companyName) {
    const task = await Task.findOne({ _id: id, companyName, assignedTo: userId });
    if (!task) throw new Error('Task not found or not assigned to user');
    task.status = status;
    if (status === 'complete') task.approvalStatus = 'pending';
    return await task.save();
  }

  static async approveOrRejectTask(id, approvalStatus, rejectionComment, companyName) {
    const task = await Task.findOne({ _id: id, companyName });
    if (!task) throw new Error('Task not found');
    task.approvalStatus = approvalStatus;
    if (approvalStatus === 'rejected') task.rejectionComment = rejectionComment;
    return await task.save();
  }

  static async updateTask(id, data, companyName) {
    return await Task.findOneAndUpdate(
      { _id: id, companyName },
      { $set: data },
      { new: true }
    );
  }

  static async deleteTask(id, companyName) {
    return await Task.findOneAndDelete({ _id: id, companyName });
  }
}

module.exports = TaskService;