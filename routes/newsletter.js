// routes/newsletter.js
const express = require('express');
const router = express.Router();
const newsletterController = require('../controllers/newsletterController');

router.get('/', newsletterController.getAllSubscribers);
router.post('/', newsletterController.subscribe);

module.exports = router;
