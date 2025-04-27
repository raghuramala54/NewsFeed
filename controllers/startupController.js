// controllers/startupController.js
const { Startup, Founder } = require('../models');

exports.getAllStartups = async (req, res) => {
    try {
        const startups = await Startup.findAll({ include: [Founder] });
        res.json(startups);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getStartupById = async (req, res) => {
    try {
        const startup = await Startup.findByPk(req.params.id, { include: [Founder] });
        if (!startup) return res.status(404).json({ error: 'Startup not found' });
        res.json(startup);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createStartup = async (req, res) => {
    try {
        const startup = await Startup.create(req.body);
        res.status(201).json(startup);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.updateStartup = async (req, res) => {
    try {
        const [updated] = await Startup.update(req.body, { where: { id: req.params.id } });
        if (!updated) return res.status(404).json({ error: 'Startup not found' });
        const updatedStartup = await Startup.findByPk(req.params.id);
        res.json(updatedStartup);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteStartup = async (req, res) => {
    try {
        const deleted = await Startup.destroy({ where: { id: req.params.id } });
        if (!deleted) return res.status(404).json({ error: 'Startup not found' });
        res.status(204).send();
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
