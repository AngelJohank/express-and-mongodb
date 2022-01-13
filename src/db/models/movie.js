const mongoose = require('mongoose');
const { Schema } = mongoose;

// Setup Schema
const movieSchema = new Schema({
	name: String,
	description: String
});

// Setup Model
const movie = mongoose.model('movie', movieSchema)

// Export Model
module.exports = movie;