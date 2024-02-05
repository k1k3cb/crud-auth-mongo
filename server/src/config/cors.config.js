// Opciones avanzadas de configuración de CORS
const corsOptions = {
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'], // Dominios autorizados
  methods: '*', // Métodos permitidos
  optionsSuccessStatus: 204,
  credentials: true
};

module.exports = { corsOptions };
