import { User } from "../database/db.js";

export class LoginControlador {
    static async iniciarSesion(req, res) {
        try {
            const { correo, clave } = req.body;

              const user = await User.findOne({ where: { correo } });
              if (!user || user.clave !== clave) {
                console.log('Credenciales invalidas');
                res.send({
                  status: "error",
                  message: "Error al iniciar sesion..."
                });
                //return res.status(401).json({ error: 'Invalid credentials' });
              } else {
                res.send({
                  status: "ok",
                  message: "Usuario loggueado..."
                });
              }
            
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
    }
}