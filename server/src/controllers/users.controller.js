const UserModel = require('../models/user.model');

const userController = {};

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

module.exports = userController;
