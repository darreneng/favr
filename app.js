
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')


var index = require('./routes/index');
var project = require('./routes/project');
var offer = require('./routes/offer');
var profile = require('./routes/profile');
var request = require('./routes/request');
var data = require('./routes/data');
var completedFavrs = require('./routes/completedFavrs');
var home = require('./routes/home');
var signup = require('./routes/signup');
var offerSubmit = require('./routes/offerFavr');
var requestSubmit = require('./routes/requestFavr');
var deletion = require('./routes/deleteFavr');
var incoming = require('./routes/incoming');
var declineFavr = require('./routes/declineFavr');
var acceptFavr = require('./routes/acceptFavr');


var app = express();


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


// Add routes here
app.get('/', index.view);
app.get('/project/:name', project.viewProject);
app.get('/offer', offer.view);
app.get('/profile', profile.view);
app.get('/request', request.view);
app.get('/data', data.favrInfo);
app.get('/completedFavrs', completedFavrs.addCompletedFavr);
app.get('/home', home.view);
app.get('/signup', signup.view);
app.get('/offerFavr', offerSubmit.offerFavr);
app.get('/requestFavr', requestSubmit.requestFavr);
app.get('/deleteFavr', deletion.deleteFavr);
app.get('/incoming', incoming.view);
app.get('/declineFavr', declineFavr.decline);
app.get('/acceptFavr', acceptFavr.accept);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
//
