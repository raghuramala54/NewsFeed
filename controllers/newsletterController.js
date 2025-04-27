// controllers/newsletterController.js
const { NewsletterSubscriber } = require('../models');

exports.getAllSubscribers = async (req, res) => {
    try {
        const subscribers = await NewsletterSubscriber.findAll();
        res.json(subscribers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.subscribe = async (req, res) => {
    try {
        const { email, city } = req.body;
        const subscriber = await NewsletterSubscriber.create({ email, city });
        res.status(201).json(subscriber);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
