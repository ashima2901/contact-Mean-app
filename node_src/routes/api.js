const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Contact = require('../models/Contact.js');

// API ROOT ROUTE
router.get('/', (req, res) => {
    res.status(200).json({ status: 200, result: 'success' });
});

// GET ALL CONTACT
router.get('/contact', (req, res, next) => {
    Contact.find((err, products) => (err) ? next(err) : res.json(products));
});

// GET A CONTACT
router.get('/contact/:id', (req, res, next) => {
    Contact.findById(req.params.id, (err, post) => (err) ? next(err) : res.json(post));
});

// SAVE A CONTACT
router.post('/contact', (req, res, next) => {
    Contact.create(req.body, (err, post) => (err) ? next(err) : res.json(post));
});

// UPDATE CONTACT
router.put('/contact/:id', (req, res, next) => {
    Contact.findByIdAndUpdate(req.params.id, req.body, (err, post) => (err) ? next(err) : res.json(post));
});

// DELETE A CONTACT
router.delete('/contact/:id', (req, res, next) => {
    Contact.findByIdAndRemove(req.params.id, req.body, (err, post) => (err) ? next(err) : res.json(post));
});

module.exports = router;
