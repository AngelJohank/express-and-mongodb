const express = require('express');
cont cors = require('cors');

// Initializers
const app = express();
require('./db/db');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Routes
app.use('/api/movies', require('./routes/movie'));

// Listen to port
app.listen(app.get('port'), () => {
	console.log('server listening on port:', app.get('port'));
});