let express = require('express')
let router = express.Router()
let Product = require('../models/Product')

let passport = require('passport')
require('../config/passport')(passport)

function getToken (headers) {
  if (headers && headers.authorization) {
    let parted = headers.authorization.split(' ')
    if (parted.length === 2) {
      return parted[1]
    } else {
      return null
    }
  } else {
    return null
  }
}

/* GET ALL */
router.get('/', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  let token = getToken(req.headers)
  if (token) {
    Product.find((err, products) => {
      if (err) return next(err)
      res.json(products)
    })
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'})
  }
})

/* GET SINGLE BY ID */
router.get('/:id', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  let token = getToken(req.headers)
  if (token) {
    Product.findById(req.params.id, (err, post) => {
      if (err) return next(err)
      res.json(post)
    })
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'})
  }
})

/* SAVE */
router.post('/', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  let token = getToken(req.headers)
  if (token) {
    Product.create(req.body, (err, post) => {
      if (err) return next(err)
      res.json(post)
    })
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'})
  }
})

/* UPDATE */
router.put('/:id', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  let token = getToken(req.headers)
  if (token) {
    Product.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
      if (err) return next(err)
      res.json(post)
    })
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'})
  }
})

/* DELETE */
router.delete('/:id', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  let token = getToken(req.headers)
  if (token) {
    Product.findByIdAndRemove(req.params.id, req.body, (err, post) => {
      if (err) return next(err)
      res.json(post)
    })
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'})
  }
})

module.exports = router
