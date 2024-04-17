const express = require('express');

const router = express.Router();
const ClientController = require('../controllers/ClientController');

// acá van las rutas del CRUD  
router.post('/', ClientController.addClients);
router.get('/', ClientController.showClients);

module.exports = router; 