const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/user.model');
const createAccessToken = require('../utils/jwt');
const TOKEN_SECRET = require('../config/token.config');

const authController = {};

authController.login = async (req, res) => {
  console.log('req.body', req.body)
  try {
    const { email, password } = req.body;

    const userFound = await UserModel.findOne({ email });

    if (!userFound) {
      return res.status(400).send({
        error: 'The email does not exist'
      });
    }

    const isMatch = await bcrypt.compare(password, userFound.password);

    if (!isMatch) {
      return res.status(400).send({
        error: 'The password is incorrect'
      });
    }

    const token = await createAccessToken({
      id: userFound._id,
      username: userFound.username
    });

    return res.cookie('token', token).send({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email
    });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

authController.register = async (req, res) => {
  const { name, email, username, password, active, image } = req.body;

  try {
    // Generar un hash de la contraseña
    const saltRounds = 10; // Número de rondas de sal para la encriptación
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new UserModel({
      name,
      email,
      username,
      active,
      image,
      password: hashedPassword // Guarda la contraseña encriptada en la base de datos
    });

    await newUser.save();
    const usersUpdated = await UserModel.find()
    res.status(201).send(usersUpdated);
  } catch (error) {
    console.error('Error al registrar al usuario:', error);
    res.status(500).send({ error: 'Error al registrar al usuario' });
  }
};

authController.verifyToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).send({ message: 'Not Token' });

  try {
    const user = jwt.verify(token, TOKEN_SECRET);

    if (!user) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    const userFound = await UserModel.findById(user.id);

    if (!userFound) {
      return res.status(404).send({ message: 'User not found' });
    }

    return res.status(200).send({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email
    });
  } catch (err) {
    console.error('Error while verifying token:', err);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = authController;
