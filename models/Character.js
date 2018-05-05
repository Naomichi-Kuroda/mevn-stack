let mongoose = require('mongoose')

let CharacterSchema = new mongoose.Schema({
  name: String,
  updated_date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Character', CharacterSchema)
