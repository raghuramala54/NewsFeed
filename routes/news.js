// routes/news.js
const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');
const {authenticateToken, isAdmin} = require("../middleware/authMiddleware");

router.get('/', newsController.getAllNews);
router.get('/:id', newsController.getNewsById);

router.post('/', authenticateToken, isAdmin, newsController.createNews);
router.put('/:id', authenticateToken, isAdmin, newsController.updateNews);
router.delete('/:id', authenticateToken, isAdmin, newsController.deleteNews);

module.exports = router;
