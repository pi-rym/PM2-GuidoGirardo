    const mongoose = require("mongoose");

    const dbCon = async () => {
        try {
            await mongoose.connect("mongodb+srv://guidogirardo:Guldo2004!@prueba.65dpilq.mongodb.net/movies?retryWrites=true&w=majority&appName=prueba");
            console.log("Conexión a la base de datos establecida correctamente.");
        } catch (error) {
            console.error("Error al conectar a la base de datos:", error);
            throw error; // Asegúrate de propagar el error para que el código cliente pueda manejarlo
        }
    }

    module.exports = dbCon;