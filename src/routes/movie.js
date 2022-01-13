const router = require('express').Router();

// Models
const movie = require('../db/models/movie');

// Get
router.get('/', (req, res) => {
	res.send('funciona');
});

module.exports = router;