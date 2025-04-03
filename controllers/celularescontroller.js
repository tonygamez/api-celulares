// Datos en memoria (simulan una "base de datos")
let celulares = [
    { id: 1, marca: 'Samsung', modelo: 'Galaxy S23', precio: 999 },
    { id: 2, marca: 'Apple', modelo: 'iPhone 15', precio: 1299 }
];

// Funciones del controlador
const getAllCelulares = (req, res) => {
    res.json(celulares);
};

const getCelularById = (req, res) => {
    const id = parseInt(req.params.id);
    const celular = celulares.find(c => c.id === id);
    if (!celular) return res.status(404).send('Celular no encontrado');
    res.json(celular);
};

// ... Agrega aquí las funciones para POST, PUT y DELETE

module.exports = {
    getAllCelulares,
    getCelularById
    // Exporta también las demás funciones
};