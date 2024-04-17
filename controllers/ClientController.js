// Exportamos el modelo 
const Client = require('../models/Client');

// Se crea la función para agregar clientes 
exports.addClients = async (req, res) => {
    try {
        let clients = new Client(req.body);
        await clients.save();
        res.status(201).send(clients);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al agregar un cliente');
    }
}

// Se crea una funcion para mostrar clientes

exports.showClients = async (req, res) => {
    try {
        const clients = await Client.find();
        res.json(clients);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al mostrar un cliente');
    }
}