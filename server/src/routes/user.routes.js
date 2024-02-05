const express = require('express');
const userRoutes = express.Router();
const userController = require('../controllers/users.controller');

// Obtener todos los usuarios
userRoutes.get('/', userController.getAllUsers);

// Obtener usuario por id
userRoutes.get('/:id', userController.getUserById);

// Crear un usuario
userRoutes.post('/', userController.createUser);

// Actualizar un usuario
userRoutes.patch('/:id', userController.updateUser);

// Eliminar un usuario
userRoutes.delete('/:id', userController.deleteUser);

module.exports = userRoutes;
