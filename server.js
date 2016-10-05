/*
Here is where you set up your server file.
express middleware.
*/

var express 		= require('express');
	bodyParser 		= require('body-parser');
	methodOverride 	= require('method-override');
	exphbs 			= require('express-handlebars');
	routes 			= require('./controllers/burgers_controller.js');

var app = express();
var port = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}));
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use('/', routes);

app.listen(port);