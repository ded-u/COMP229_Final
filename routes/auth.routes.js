// Modules
const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// Auth Routes
router.post('/auth/signin', authController.signIn);
router.get('/auth/signout', authController.signOut);

module.exports = router;