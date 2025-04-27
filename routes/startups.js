// routes/startups.js
const express = require('express');
const router = express.Router();
const startupController = require('../controllers/startupController');

router.get('/', startupController.getAllStartups);
router.get('/:id', startupController.getStartupById);
router.post('/', startupController.createStartup);
router.put('/:id', startupController.updateStartup);
router.delete('/:id', startupController.deleteStartup);

module.exports = router;
