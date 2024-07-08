import { UsuarioModelo } from "../model/UsuarioModel.js";

export class UsuarioControlador {
  static async registrarUsuario(req, res) {
    try {
      const { nombre, correo, clave, clave2 } = req.body;
      const id = Date.now();

      console.log(nombre, correo, clave);

      const resultado = await UsuarioModelo.guardarUsuario(nombre, correo, clave);

      console.log('Resultado: ' + resultado);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}