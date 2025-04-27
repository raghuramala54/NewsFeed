// controllers/jobController.js
const { JobListing, Startup } = require('../models');

exports.getAllJobs = async (req, res) => {
    try {
        const jobs = await JobListing.findAll({ include: [Startup] });
        res.json(jobs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getJobById = async (req, res) => {
    try {
        const job = await JobListing.findByPk(req.params.id, { include: [Startup] });
        if (!job) return res.status(404).json({ error: 'Job not found' });
        res.json(job);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createJob = async (req, res) => {
    try {
        const job = await JobListing.create(req.body);
        res.status(201).json(job);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.updateJob = async (req, res) => {
    try {
        const [updated] = await JobListing.update(req.body, { where: { id: req.params.id } });
        if (!updated) return res.status(404).json({ error: 'Job not found' });
        const updatedJob = await JobListing.findByPk(req.params.id);
        res.json(updatedJob);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteJob = async (req, res) => {
    try {
        const deleted = await JobListing.destroy({ where: { id: req.params.id } });
        if (!deleted) return res.status(404).json({ error: 'Job not found' });
        res.status(204).send();
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
