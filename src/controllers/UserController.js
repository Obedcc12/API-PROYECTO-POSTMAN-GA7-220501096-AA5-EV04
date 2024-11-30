////////////////////////////////////////////////////////////////////////////
//                                                                        //
// ESTE ARCHIVO ES PARA CONFIGURAR EL CONTROLADOR PARA LOS USUARIOS       //
//                                                                        //
////////////////////////////////////////////////////////////////////////////

const { User } = require('../models'); // importa el modelo

// Obtener todos los usuarios
const getUsers = async (req, res) => {
  try {
    const users = await User.findAll(); // obtiene todos los datos con findAll()
    res.status(200).json(users);
  } catch (error) { // si ocurre un error, devuelve un mensaje de error
    res.status(500).json({ error: error.message });
  }
};

// Crear un nuevo usuario
const createUser = async (req, res) => {
  try {
    const { name, email, password, departamento } = req.body; // extrae los datos del cuerpo de la solicitud
    const newUser = await User.create({ name, email, password, departamento }); // crea un nuevo usuario
    res.status(201).json(newUser); // devuelve el nuevo usuario creado
  } catch (error) { // si ocurre un error, devuelve un mensaje de error
    res.status(500).json({ error: error.message });
  }
};

// Login de usuario
const login = async (req, res) => {
  try {
    const { email, password, departamento } = req.body; // extrae email, password y departamento
    const user = await User.findOne({ where: { email, password, departamento } }); // busca un usuario que coincida

    if (!user) {
      // Si no encuentra al usuario
      return res.status(404).json({ error: 'Usuario no encontrado o credenciales incorrectas.' });
    }

    // Si encuentra al usuario
    res.status(200).json({ message: 'Usuario logeado correctamente'});
  } catch (error) { // si ocurre un error, devuelve un mensaje de error
    res.status(500).json({ error: error.message });
  }
};

// Exportar las funciones
module.exports = { createUser, getUsers, login };
