
export class UsuarioControlador {

    static async registrarUsuario(req, res) {
        try {
            const { nombre } = req.body;
            console.log('Nombre Usuario: ', nombre);
            res.send({
                status: "ok",
                number: 1,
                message: `nombre de usuario: ${nombre}`
            })
        } catch (error) {
            console.log(error);
        }
    }
}