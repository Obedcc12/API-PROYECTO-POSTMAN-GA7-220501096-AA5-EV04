const logger = require('./utils/logger');
const express = require('express'); // se trae express.js
const app = express(); // se crea una instancia de express
const port = 3005; // se le asigna el puerto a una variable


// Middleware para procesar JSON en el cuerpo de la solicitud
app.use(express.json()); // Ahora req.body se llenará correctamente con los datos JSON

// Usar el middleware de logger para registrar datos
app.use(logger);

// Definir las rutas
const userRoutes = require('./routes/UserRoutes'); // trae las rutas de los usuarios
app.use('/api', userRoutes);

app.listen(port, () => {
  console.log(`Servidor de Express funcionando en el puerto ${port}`); // manda en consola el mensaje de que se ha creado el servidor de express
});
