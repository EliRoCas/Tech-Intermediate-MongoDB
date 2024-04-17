const express = require('express'); // Se importa express
const connectDB = require('../config/db'); // Se importa la función 'connectDB', para configurar la conexión a la DB 
const cors = require('cors'); // // Importa el paquete CORS para permitir solicitudes cruzadas (Cross-Origin Resource Sharing) de otros dominios.
const router = require('../routes/RoutesClient');


// Inicializa la aplicación Express.
const app = express();
// Define el puerto en el que el servidor escuchará las solicitudes entrantes.
const port = 5000;

// Configura la aplicación para usar JSON. 
// Permite que Express procese las solicitudes con cuerpo en formato JSON.
app.use(express.json());


// Acá se configuran las rutas de los módulos 
// Configura una ruta para la API de clientes.
// En este caso, '/api/Clients' apunta a un manejador de rutas que está siendo importado.
app.use('/apiClients/Clients', require('../routes/RoutesClient'));


//Enlazamos conexión a la Base de Datos 
connectDB();

// Habilita CORS para permitir solicitudes desde otros dominios a la aplicación.
app.use(cors());

// se configura el puerto que va a tener nuestro servidor
app.listen(port, () => {
    console.log('El servidor está conectado: http://localhost:5000'); // Se configura el puerto de escucha
})

// Configura una ruta para manejar solicitudes GET a la raíz ('/').
// Responde con un mensaje de bienvenida cuando se realiza una solicitud GET a la raíz.
app.get('/', (req, res) => {
    res.send("Bienvenido, nuestro servidor está configurado");
})





