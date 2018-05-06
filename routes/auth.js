let express = require('express')
let passport = require('passport')
let settings = require('../config/settings')
require('../config/passport')(passport)
let jwt = require('jsonwebtoken')
let router = express.Router()
let User = require('../models/User')

router.post('/register', (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.json({success: false, msg: 'Please pass username and password.'})
  } else {
    let newUser = new User({
      username: req.body.username,
      password: req.body.password
    })
    // save the user
    newUser.save(err => {
      if (err) {
        return res.json({success: false, msg: 'Username already exists.'})
      }
      res.json({success: true, msg: 'Successful created new user.'})
    })
  }
})

router.post('/login', (req, res) => {
  User.findOne({
    username: req.body.username
  }, (err, user) => {
    if (err) throw err

    if (!user) {
      res.status(401).send({success: false, msg: 'Authentication failed. User not found.'})
    } else {
      // check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          // if user is found and password is right create a token
          let token = jwt.sign(user.toJSON(), settings.secret)
          // return the information including token as JSON
          res.json({success: true, token: 'JWT ' + token})
        } else {
          res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'})
        }
      })
    }
  })
})

module.exports = router
