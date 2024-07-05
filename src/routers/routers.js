import express from 'express';
import { UsuarioControlador } from '../controller/UsuarioController.js';

export const rutas = express.Router();

// Ruta de prueba
rutas.get('/', (req, res) => {
    res.json({ message: 'Hola, mundo!' });
});

rutas.get('/api', (req, res) => {
    res.json({ message: 'Hola, nueva ruta!' });
});

rutas.post('/api/registrar-usuario', UsuarioControlador.registrarUsuario);