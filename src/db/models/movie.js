const mongoose = require('mongoose');
const { Schema } = mongoose;

// Setup Schema
const movieSchema = new Schema({
	name: {type: String, required: true},
	description: {type: String, required: true},
	date: Date
});

// Setup Model
const movie = mongoose.model('movie', movieSchema)

// Export Model
module.exports = movie;