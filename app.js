
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
var submit = require('./routes/signUpSubmit');

var offer2 = require('./routes/offer2');
var profile2 = require('./routes/profile2');
var request2 = require('./routes/request2');
var completedFavrs2 = require('./routes/completedFavrs2');
var home2 = require('./routes/home2');
var offerSubmit2 = require('./routes/offerFavr2');
var requestSubmit2 = require('./routes/requestFavr2');
var deletion2 = require('./routes/deleteFavr2');
var incoming2 = require('./routes/incoming2');
var declineFavr2 = require('./routes/declineFavr2');
var acceptFavr2 = require('./routes/acceptFavr2');






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
app.get('/signUpSubmit', submit.signUp);


app.get('/offer2', offer2.view);
app.get('/profile2', profile2.view);
app.get('/request2', request2.view);
app.get('/completedFavrs2', completedFavrs2.addCompletedFavr);
app.get('/home2', home2.view);
app.get('/offerFavr2', offerSubmit2.offerFavr);
app.get('/requestFavr2', requestSubmit2.requestFavr);
app.get('/deleteFavr2', deletion2.deleteFavr);
app.get('/incoming2', incoming2.view);
app.get('/declineFavr2', declineFavr2.decline);
app.get('/acceptFavr2', acceptFavr2.accept);



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
//
