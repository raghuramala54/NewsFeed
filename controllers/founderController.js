// controllers/founderController.js
const { Founder } = require('../models');

exports.getAllFounders = async (req, res) => {
    try {
        const founders = await Founder.findAll();
        res.json(founders);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getFounderById = async (req, res) => {
    try {
        const founder = await Founder.findByPk(req.params.id);
        if (!founder) return res.status(404).json({ error: 'Founder not found' });
        res.json(founder);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createFounder = async (req, res) => {
    try {
        const founder = await Founder.create(req.body);
        res.status(201).json(founder);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.updateFounder = async (req, res) => {
    try {
        const [updated] = await Founder.update(req.body, { where: { id: req.params.id } });
        if (!updated) return res.status(404).json({ error: 'Founder not found' });
        const updatedFounder = await Founder.findByPk(req.params.id);
        res.json(updatedFounder);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteFounder = async (req, res) => {
    try {
        const deleted = await Founder.destroy({ where: { id: req.params.id } });
        if (!deleted) return res.status(404).json({ error: 'Founder not found' });
        res.status(204).send();
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
