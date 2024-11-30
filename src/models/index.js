//////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           /
// ESTE ARCHIVO ES USADO PARA MANDAR TODAS LAS TABLAS CREADAS EN LOS MODELOS A LA DATABSE  /
//                                                                                           /
//////////////////////////////////////////////////////////////////////////////////////////////

const sequelize = require('../config/Database');
const User = require('./UserModel');

(async () => {
  try {
    await sequelize.sync({ alter: true }); // alter: actualiza los cambios en el modelo
    console.log('Modelos sincronizados con la base de datos.');
  } catch (error) {
    console.error('Error al sincronizar los modelos:', error);
  }
})();

module.exports = { User };
