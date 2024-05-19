import { Request, Response } from 'express';
import { LoginAdvogadoService } from '../../service/advogado/loginAdvogadoService';

class LoginAdvogadoController {
    async handle(req: Request, res: Response) {
        const { usuario, password } = req.body
        const loginAdvogadoService = new LoginAdvogadoService()
        const resposta = await loginAdvogadoService.execute({
            usuario,
            password
        })
        return res.json(resposta)
    }
}

export { LoginAdvogadoController }