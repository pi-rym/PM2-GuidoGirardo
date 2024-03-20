const movieService = require("../services/movieService");
const Movie = require("../models/Movie");

module.exports = {
    getMovies: async (req, res) => {
        try{
            const movies = await movieService.movieService();
            console.log(movies);
            res.status(200).json(movies);
        }catch(e){
            res.status(500).json({
                    error: "Error interno del servidor"
            })
        }
    },
    createMovies: async (req, res) => {
        console.log("Request body:", req.body);
        try {
            // Aquí inserta los datos de la película en tu base de datos
            console.log("Inserting movie into database...");
            const { title, year, director, duration, genre, rate, poster } = req.body;
            console.log(title);
            const newMovie = new Movie({ title, year, director, duration, genre, rate, poster });
            console.log(newMovie);
            await newMovie.save();
            console.log("Movie inserted successfully.");
            res.status(200).json({ message: "Movie created successfully" });
        } catch (error) {
            console.error("Error creating movie:", error);
            res.status(500).json({ error: "Error interno del servidor" });
        }
    }
}