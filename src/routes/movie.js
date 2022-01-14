const router = require('express').Router();

// Models
const movie = require('../db/models/movie');

// Get
router.get('/', async (req, res) => {
	const movieArrayDB = await movie.find({}, {_id: 0, __v: 0}).sort({date: -1});
	res.send(movieArrayDB);
});

// Post
router.post('/', async (req, res) => {
	let newDoc = req.body;
	newDoc.date = new Date;

	const doc = await movie.create(newDoc, (e, doc) => {
		if (!e) res.status(200).send(doc);
		else res.status(400).send(e);
	});
});

module.exports = router;