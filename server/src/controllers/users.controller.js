const UserModel = require('../models/user.model');

const userController = {};
const path = require('path');
const fsPromises = require('fs/promises');

require('dotenv').config();
const { v2: cloudinary } = require('cloudinary');
cloudinary.config(process.env.CLOUDINARY_URL);

// Obtener todos los usuarios
userController.getAllUsers = async (req, res) => {
  try {
    const allUsers = await UserModel.find();
    return res.status(200).send(allUsers);
  } catch (err) {
    return res.status(500).send({ error: 'Error reading database.' + err });
  }
};

// Obtener usuario por id
userController.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id);
    if (!user) return res.status(409).send({ error: 'User not Exists' });
    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({ error: 'Error reading database.' + err });
  }
};

// Crear un usuario nuevo
userController.createUser = async (req, res) => {
  const { name, email, username, password, active, image } = req.body;
  if (!name || !email || !username || !password) { return res.status(400).send({ error: 'Bad request.' }); }

  try {
    const newUser = new UserModel({

      name,
      email,
      username,
      password,
      active,
      image
    });

    await newUser.save();

    const allUsers = await UserModel.find();
    return res.status(200).send(allUsers);
  } catch (err) {
    return res.status(500).send({ error: 'Error reading database.' + err });
  }
};

userController.updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id);

    if (!user) {
      return res.status(409).send({ error: 'User not Exists' });
    }

    await UserModel.updateOne({ _id: id }, { $set: { ...req.body } });

    const allUsers = await UserModel.find();
    return res.status(200).send(allUsers);
  } catch (err) {
    return res.status(500).send({ error: 'Error reading database.' + err });
  }
};

userController.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await UserModel.findById(id);

    if (!user) return res.status(409).send({ error: 'User not Exists' });

    await UserModel.deleteOne({ _id: id });

    const allUsers = await UserModel.find();
    return res.status(200).send(allUsers);
  } catch (err) {
    return res.status(500).send({ error: 'Error reading database.' + err });
  }
};

// controlador subir imágenes
userController.uploadImage = async (req, res) => {
  console.log(req.files);
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send({ error: 'No files were uploaded.' });
    }

    const photo = req.files.photo;

    const uploadPath = path.join(__dirname, '../uploads', photo.name);

    await photo.mv(uploadPath);

    const nameForCloudinary = path.parse(photo.name).name;

    const restultUpload = await cloudinary.uploader.upload(uploadPath, { public_id: nameForCloudinary });

    fsPromises.unlink(uploadPath);

    res.status(201).send({ url: restultUpload.secure_url });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).send(error.message || 'Internal Server Error');
  }
};

module.exports = userController;
