/**
 * Created by Binod on 1/25/2017.
 */
// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var fs = require("fs");

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(require('./controllers'));
app.use(require('./routes'));

// ROUTES FOR OUR API
var router = express.Router();

app.use(express.static('public'));

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//needed for unintended errors like database connection closed remotely
process.on('uncaughtException', function (err) {
    console.error(err.stack);
    console.log("Node NOT Exiting...");
});


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
//app.use('/api', router);

var server = app.listen(5454, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Server is running at http://localhost:",port)
})