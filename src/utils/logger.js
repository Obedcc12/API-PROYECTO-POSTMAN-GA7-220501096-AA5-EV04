// este midleware se usa para crear logs de errores en la aplicacion

const logger = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); // Continúa al siguiente middleware o ruta
  };
  
  module.exports = logger;
  