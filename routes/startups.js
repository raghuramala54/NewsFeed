// routes/startups.js
const express = require('express');
const router = express.Router();
const startupController = require('../controllers/startupController');
const { authenticateToken } = require('../middleware/authMiddleware'); // ✨ Import the middleware

// Public routes
router.get('/', startupController.getAllStartups);
router.get('/:id', startupController.getStartupById);

// Protected routes
router.post('/', authenticateToken, startupController.createStartup);
router.put('/:id', authenticateToken, startupController.updateStartup);
router.delete('/:id', authenticateToken, startupController.deleteStartup);

module.exports = router;
