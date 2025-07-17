const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const auth = require('../middleware/auth');

const restrictToAdmin = (req, res, next) => {
  if (!req.user.role.includes('admin')) {
    return res.status(403).json({ message: 'Access denied. Admin role required.' });
  }
  next();
};

router.get('/', auth, projectController.getProjects);
router.post('/', auth, restrictToAdmin, projectController.createProject);
router.put('/:id', auth, restrictToAdmin, projectController.updateProject);
router.delete('/:id', auth, restrictToAdmin, projectController.deleteProject);

module.exports = router;