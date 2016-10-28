var
  mongoose = require('mongoose'),
  carSchema = new mongoose.Schema({
    // name: String,
    location: String,
    description: String,
    // image: String
  }, {timestamps: true})

var Car = mongoose.model('Car', carSchema)
module.exports = Car
