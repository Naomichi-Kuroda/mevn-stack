let mongoose = require('mongoose')

let ProductSchema = new mongoose.Schema({
  name: String,
  updated_date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Product', ProductSchema)
