const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

// Public route for registration
router.post('/', userController.createUser); // ✅ Public registration

// Protected routes (only logged-in users can access)
router.get('/', auth, userController.getUsers);

module.exports = router;
