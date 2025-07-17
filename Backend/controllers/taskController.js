const TaskService = require('../services/taskService');

exports.getTasks = async (req, res) => {
  try {
    const tasks = await TaskService.getAllTasks(req.user.id, req.user.companyName, req.user.role);
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createTask = async (req, res) => {
  try {
    if (!req.user.role.includes('manager')) {
      return res.status(403).json({ message: 'Access denied. Manager role required.' });
    }
    const task = await TaskService.createTask(req.body, req.user.companyName, req.user.id);
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateTaskStatus = async (req, res) => {
  try {
    if (!req.user.role.includes('employee')) {
      return res.status(403).json({ message: 'Access denied. Employee role required.' });
    }
    const task = await TaskService.updateTaskStatus(req.params.id, req.body.status, req.user.id, req.user.companyName);
    res.json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.approveOrRejectTask = async (req, res) => {
  try {
    if (!req.user.role.includes('manager')) {
      return res.status(403).json({ message: 'Access denied. Manager role required.' });
    }
    const { approvalStatus, rejectionComment } = req.body;
    const task = await TaskService.approveOrRejectTask(req.params.id, approvalStatus, rejectionComment, req.user.companyName);
    res.json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    if (!req.user.role.includes('manager')) {
      return res.status(403).json({ message: 'Access denied. Manager role required.' });
    }
    const task = await TaskService.updateTask(req.params.id, req.body, req.user.companyName);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    if (!req.user.role.includes('manager')) {
      return res.status(403).json({ message: 'Access denied. Manager role required.' });
    }
    const task = await TaskService.deleteTask(req.params.id, req.user.companyName);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};