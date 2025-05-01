// routes/jobs.js
const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');
const {authenticateToken, isAdmin} = require("../middleware/authMiddleware");

router.get('/', jobController.getAllJobs);
router.get('/:id', jobController.getJobById);

router.post('/', authenticateToken, isAdmin, jobController.createJob);
router.put('/:id', authenticateToken, isAdmin, jobController.updateJob);
router.delete('/:id', authenticateToken, isAdmin, jobController.deleteJob);

module.exports = router;
