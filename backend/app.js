const express = require('express')
//const session = require('express-session');
//const mongoose = require('mongoose');
//const MongoStore = require('connect-mongo')(session);
const path = require('path')
//const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
//const passport = require('passport');
//const promisify = require('es6-promisify');
//const flash = require('connect-flash');
//const expressValidator = require('express-validator');
const routes = require('./routes/index')
//const helpers = require('./helpers');
const errorHandlers = require('./handlers/errorHandlers')
//require('./handlers/passport');

// create our Express app
const app = express()

// serves up static files from the public folder. Anything in public/ will just be served up as the file it is
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static('build'))

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Exposes a bunch of methods for validating data. Used heavily on userController.validateRegister
//app.use(expressValidator());

// // The flash middleware let's us use req.flash('error', 'Shit!'), which will then pass that message to the next page the user requests
//app.use(flash());

// After allllll that above middleware, we finally handle our own routes!
app.use('/', routes)

// If that above routes didnt work, we 404 them and forward to error handler
app.use(errorHandlers.notFound)

// One of our error handlers will see if these errors are just validation errors
//app.use(errorHandlers.flashValidationErrors);

// Otherwise this was a really bad error we didn't expect! Shoot eh
if (app.get('env') === 'development') {
  /* Development Error Handler - Prints stack trace */
  app.use(errorHandlers.developmentErrors)
}

// production error handler
//app.use(errorHandlers.productionErrors);

// done! we export it so we can start the site in start.js
module.exports = app