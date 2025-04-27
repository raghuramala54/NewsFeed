// controllers/newsController.js
const { NewsArticle, Startup } = require('../models');

exports.getAllNews = async (req, res) => {
    try {
        const news = await NewsArticle.findAll({ include: [Startup] });
        res.json(news);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getNewsById = async (req, res) => {
    try {
        const article = await NewsArticle.findByPk(req.params.id, { include: [Startup] });
        if (!article) return res.status(404).json({ error: 'News not found' });
        res.json(article);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createNews = async (req, res) => {
    try {
        const article = await NewsArticle.create(req.body);
        res.status(201).json(article);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.updateNews = async (req, res) => {
    try {
        const [updated] = await NewsArticle.update(req.body, { where: { id: req.params.id } });
        if (!updated) return res.status(404).json({ error: 'News not found' });
        const updatedArticle = await NewsArticle.findByPk(req.params.id);
        res.json(updatedArticle);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteNews = async (req, res) => {
    try {
        const deleted = await NewsArticle.destroy({ where: { id: req.params.id } });
        if (!deleted) return res.status(404).json({ error: 'News not found' });
        res.status(204).send();
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
