const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');

router.get('/movies', controllers.getMovies);

module.exports = router;