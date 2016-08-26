// call the packages we need
var express    = require('express');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');

var app        = express();                 // define our app using express

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/todoDB'); 

require('./app/routes/routes')(app);



var port = process.env.PORT || 8080;

app.listen(port);
console.log('Server started on port ' + port);