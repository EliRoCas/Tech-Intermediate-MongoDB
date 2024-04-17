const mongoose = require('mongoose');
require('dotenv').config();

// Función para hacer la cadena de conexión

const connectDB = () => {
    mongoose
        .connect(process.env.MONGO_URL) // se configura la cadena de conexión con moongose
        .then(() => console.log("Estamos conectados con mongoDB"))
        .catch((err) => console.log(err));
}

module.exports = connectDB;