// controllers/newsletterController.js
const { NewsletterSubscriber } = require('../models');
const validator = require('validator');

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

        // ✅ Validate email presence
        if (!email || !validator.isEmail(email)) {
            return res.status(400).json({ error: 'Invalid email address' });
        }

        // ✅ Check if already subscribed
        const existing = await NewsletterSubscriber.findOne({ where: { email } });
        if (existing) {
            return res.status(400).json({ error: 'Email is already subscribed' });
        }

        // ✅ Create subscriber
        const subscriber = await NewsletterSubscriber.create({ email, city, createdAt: new Date() });
        res.status(201).json(subscriber);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
