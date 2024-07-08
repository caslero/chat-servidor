import { User } from "../database/db.js";

export class UsuarioModelo {
  static async guardarUsuario(nombre, correo, clave) {
    try {
      const usuario = await User.create({
        nombre,
        correo,
        clave
      });
      return usuario;

    } catch (e) {
      console.error("Error al agregar el usuario: ", e);
      throw e;
    }
  }
}




