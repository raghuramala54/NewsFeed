// routes/founders.js
const express = require('express');
const router = express.Router();
const founderController = require('../controllers/founderController');
const {authenticateToken, isAdmin} = require("../middleware/authMiddleware");

router.get('/', founderController.getAllFounders);
router.get('/:id', founderController.getFounderById);


router.post('/', authenticateToken, isAdmin, founderController.createFounder);
router.put('/:id', authenticateToken, isAdmin, founderController.updateFounder);
router.delete('/:id', authenticateToken, isAdmin, founderController.deleteFounder);

module.exports = router;
