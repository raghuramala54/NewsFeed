// routes/founders.js
const express = require('express');
const router = express.Router();
const founderController = require('../controllers/founderController');

router.get('/', founderController.getAllFounders);
router.get('/:id', founderController.getFounderById);
router.post('/', founderController.createFounder);
router.put('/:id', founderController.updateFounder);
router.delete('/:id', founderController.deleteFounder);

module.exports = router;
