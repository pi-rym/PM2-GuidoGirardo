const express = require('express');
const router = express.Router();
const { getMovies, createMovies } = require('../controllers/controllers');

router.get('/movies', getMovies);
router.post('/createMovies', createMovies);

module.exports = router;