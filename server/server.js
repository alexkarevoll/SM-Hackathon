var
  express = require('express'),
  app = express(),
  logger = require('morgan'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  apiRoutes = require('./routes/cars.js')

var PORT = process.env.PORT || 3000

mongoose.connect('mongodb://localhost/sm-hackathon', function(err) {
  if(err) return console.log(err)
  console.log('Connected to MongoDB. WOOOO!')
})

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(express.static('client'))

app.use('/api', apiRoutes)

app.get('*', function(req, res) {
  res.sendFile('/client/index.html', {root: './'})
})

app.listen(PORT, function(err) {
  console.log(err || "Server running on port " + PORT)
})
