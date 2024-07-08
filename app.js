import express from 'express';
import { rutas } from './src/routers/routers.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { sequelize } from './src/database/db.js';
import { User } from './src/database/db.js';


const app = express();
const port = process.env.PORT || 3000;

app.use(cookieParser());
app.use(express.json());
app.use(cors({
  origin: ['https://chat-servidor-six.vercel.app', 'http://localhost:5173'],
  methods: ['GET', 'POST', 'PUT'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

//Settings o Configuraciones
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});


  (async () => {
    try {
      await sequelize.authenticate();
      console.log('Conexión establecida con la base de datos');
  
      await User.sync({ force: false }); // Crea la tabla si no existe, o la actualiza si hay cambios
      console.log('Tabla de usuarios sincronizada');
    } catch (error) {
      console.error('Error al conectar con la base de datos:', err);
    }
  })();







app.use(rutas);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});