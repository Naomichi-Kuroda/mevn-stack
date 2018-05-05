let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Character = require('../models/Character.js');

/* GET ALL */
router.get('/', (req, res, next) => {
  Character.find((err, characters) => {
    if (err) return next(err)
    res.json(characters)
  });
});

/* GET SINGLE BY ID */
router.get('/:id', (req, res, next) => {
  Character.findById(req.params.id, (err, post) => {
    if (err) return next(err)
    res.json(post)
  })
})

/* SAVE */
router.post('/', (req, res, next) => {
  Character.create(req.body, (err, post) => {
    if (err) return next(err)
    res.json(post)
  })
})

/* UPDATE */
router.put('/:id', (req, res, next) => {
  Character.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
    if (err) return next(err)
    res.json(post)
  })
})

/* DELETE */
router.delete('/:id', (req, res, next) => {
  Character.findByIdAndRemove(req.params.id, req.body, (err, post) => {
    if (err) return next(err)
    res.json(post)
  })
})

module.exports = router
