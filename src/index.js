const express = require('express');

// Initializers
const app = express();
require('./db/db');

// Settings
app.set('port', process.env.PORT || 3000);

// Routes
app.use('/api/movies', require('./routes/movie'));

// Listen to port
app.listen(app.get('port'), () => {
	console.log('server listening on port:', app.get('port'));
})