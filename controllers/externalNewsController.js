const { fetchStartupNews } = require('../services/externalNewsService');

exports.getStartupNews = async (req, res) => {
    try {
        const newsArticles = await fetchStartupNews();
        res.status(200).json(newsArticles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
