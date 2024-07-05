import express from 'express';
import { rutas } from './src/routers/routers.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(rutas);

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});