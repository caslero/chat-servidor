import { UsuarioModelo } from "../model/UsuarioModel.js";

export class UsuarioControlador {
  static async registrarUsuario(req, res) {
    try {
      const { nombre, correo, clave, clave2 } = req.body;

      const resultado = await UsuarioModelo.guardarUsuario(nombre, correo, clave);

      if (resultado) {
        res.json({
          status: "ok",
          message: "Usuario guardado..."
        });
      } else {
        res.json({
          status: "Error",
          message: "error al guardar..."
        });
      }

      console.log('Resultado: ' + resultado);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}