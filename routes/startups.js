// routes/startups.js
const express = require('express');
const router = express.Router();
const startupController = require('../controllers/startupController');
const { authenticateToken, isAdmin} = require('../middleware/authMiddleware'); // ✨ Import the middleware

// Public routes
router.get('/', startupController.getAllStartups);
router.get('/:id', startupController.getStartupById);

// Protected routes
router.post('/', authenticateToken, isAdmin, startupController.createStartup);
router.put('/:id', authenticateToken, isAdmin, startupController.updateStartup);
router.delete('/:id', authenticateToken, isAdmin, startupController.deleteStartup);

module.exports = router;
