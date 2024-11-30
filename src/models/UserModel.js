//////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           /
// ESTE ARCHIVO ES USADO PARA CREAR TABLAS EN LA BASE DE DATOS, EN ESTE CASO, SE CREA USERS  /
//                                                                                           /
//////////////////////////////////////////////////////////////////////////////////////////////

const { DataTypes } = require('sequelize');
const sequelize = require('../config/Database');

// Define el modelo User
const User = sequelize.define('User', {
  id: { // se definen las configuraciones para el campo de id de la tabla
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: { // se definen las configuraciones para el campo de name de la tabla
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: { // se definen las configuraciones para el campo de email de la tabla
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },

  departamento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
  password: { // se definen las configuraciones para el campo de password de la tabla
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true, // Agrega createdAt y updatedAt automáticamente
  tableName: 'users', // Opcional: especifica el nombre de la tabla
});

module.exports = User;
