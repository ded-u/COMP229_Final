// Modules
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// TODO: Find Cannot GET /users"

// User Routes
router.post('/api/users', userController.createUser);
router.get('/api/users', userController.getAllUsers);
router.get('/api/users/:userId', userController.getUserById);
router.put('/api/users/:userId', userController.updateUser);
router.delete('/api/users/:userId', userController.deleteUser);

module.exports = router;