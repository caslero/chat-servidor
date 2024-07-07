import express from 'express';
import { rutas } from './src/routers/routers.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'

const app = express();
const port = process.env.PORT || 3000;

app.use(cookieParser());
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
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

app.use(rutas);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});