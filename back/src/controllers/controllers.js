const movieService = require("../services/movieService");

module.exports = {
    getMovies: async (req, res) => {
        try{
            const movies = await movieService.movieService();
            res.status(200).json(movies);
        }catch(e){
            res.status(500).json({
                    error: "Error interno del servidor"
                })
        }
    }
}