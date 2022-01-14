// MongoDB setup
const db = require('mongoose');

// Setup URI
const {user, password, dbName} = require('./config.json');
const uri = `mongodb+srv://${user}:${password}@cluster0.gcgom.mongodb.net/${dbName}?retryWrites=true&w=majority`;

// Connect to Database
db.connect(uri)
	.then((db) => console.log('DB connection established'))
	.catch(e => console.error(e));

// Handle errors
db.connection.on('error', e => {
	console.error(e);
});