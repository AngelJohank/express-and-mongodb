const router = require('express').Router();

// Models
const movie = require('../db/models/movie');

// Get
router.get('/', async (req, res) => {
	const movieArrayDB = await movie.find();
	res.json(movieArrayDB);
});

// Post

router.post('/', async (req, res) => {
	res.send('working');
});

module.exports = router;