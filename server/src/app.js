const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const { corsOptions } = require('./config/cors.config');
const userRoutes = require('./routes/user.routes');
const { databaseConnect } = require('./database/database');
const authRoutes = require('./routes/auth.routes');
require('dotenv').config();

// Rutas

// Middlewares para cliente

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// Opciones avanzadas de configuración de CORS
app.use(cors(corsOptions));
app.use(express.json());

// Uso de rutas
app.use('/api/users', userRoutes);
app.use('/auth', authRoutes);

const startServer = () => {
  databaseConnect();
  app.listen(3000, () =>
    console.log('Servidor en ejecución en el puerto 3000')
  );
};

startServer();
