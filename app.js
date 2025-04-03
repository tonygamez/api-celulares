const express = require('express');
const app = express();
const celularesRouter = require('./routes/celulares'); // Importar rutas

app.use(express.json());
app.use('/celulares', celularesRouter); // Usar rutas

app.get('/', (req, res) => {
    res.send('API de Celulares Funcionando! 🚀');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});