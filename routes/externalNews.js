const express = require('express');
const router = express.Router();
const { getStartupNews } = require('../controllers/externalNewsController');

router.get('/', getStartupNews); // GET /external-news

module.exports = router;
