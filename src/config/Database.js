///////////////////////////////////////////////////////////////////////////
//                                                                        /
// ESTE ARCHIVO ES PARA CONFIGURAR LA BASE DE DATOS, EN ESTE CASO MYSQL   /
//                                                                        /
///////////////////////////////////////////////////////////////////////////


const { Sequelize } = require('sequelize');

// Configuración de conexión a la base de datos
const sequelize = new Sequelize('apirym', 'root', '', {
  host: 'localhost',  // para definir si se esta ejecutando en localhost o en una base de datos remota
  dialect: 'mysql', // para tener la base de datos en mysql
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos exitosa.');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
})();

module.exports = sequelize;
