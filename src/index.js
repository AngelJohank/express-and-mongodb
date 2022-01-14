const express = require('express');
const morgan = require('morgan');

// Initializers
const app = express();
require('./db/db');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Routes
app.use('/api/movies', require('./routes/movie'));

// Listen to port
app.listen(app.get('port'), () => {
	console.log('server listening on port:', app.get('port'));
});