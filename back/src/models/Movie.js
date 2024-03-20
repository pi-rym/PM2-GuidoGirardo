const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    //pepe: String,
    //hola: String
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;