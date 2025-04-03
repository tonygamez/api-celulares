const express = require('express');
const router = express.Router();
const {
    getAllCelulares,
    getCelularById
    // Importa las demás funciones
} = require('../controllers/celularescontroller');

// Definir rutas
router.get('/', getAllCelulares);
router.get('/:id', getCelularById);
// router.post('/', crearCelular);
// router.put('/:id', actualizarCelular);
// router.delete('/:id', eliminarCelular);

module.exports = router;