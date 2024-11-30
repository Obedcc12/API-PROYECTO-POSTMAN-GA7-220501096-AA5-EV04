/////////////////////////////////////////////////////////////////////////////////
//                                                                              /
// EN ESTE ARCHIVO SE CREAN LAS RUTAS, PARA SER USADAS DESDE EL LADO DEL BACK  /
//                                                                              /
/////////////////////////////////////////////////////////////////////////////////

const express = require('express');
const { createUser, getUsers, login } = require('../controllers/UserController');

const router = express.Router();

router.post('/users', createUser); // ruta para crear usuarios 
router.get('/users', getUsers); // ruta para obtener todos los usuarios
router.post('/login', login) // ruta para logear los usuarios

module.exports = router;
