const { NewsArticle } = require('../models');
const { fetchStartupNews } = require('../services/externalNewsService');
require('dotenv').config();

const seedNewsArticles = async () => {
    const articles = await fetchStartupNews();

    for (const article of articles) {
        const { title, description, content, url, publishedAt } = article;

        // Avoid duplicate by title
        const existing = await NewsArticle.findOne({ where: { title } });
        if (existing) continue;

        await NewsArticle.create({
            title,
            content,
            summary: description,
            source_url: url,
            startup_id: null, // No startup association now
            published_at: new Date(publishedAt),
            createdAt: new Date(),
        });

        console.log(`Inserted article: "${title}"`);
    }

    console.log("✅ NewsArticle seeding completed.");
};

seedNewsArticles();
