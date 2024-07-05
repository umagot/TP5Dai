// index.js
const express = require('express');
const app = express();
const pool = require('./db');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API está funcionando...');
});

// Importar las rutas
const eventRoutes = require('./routes/events');
app.use('/api/event', eventRoutes);

app.listen(PORT, () => {
  console.log(`Servidor está corriendo en el puerto ${PORT}`);
});
