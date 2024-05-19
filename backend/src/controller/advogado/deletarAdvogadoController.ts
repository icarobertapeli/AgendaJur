import { Request, Response } from 'express';
import { DeletarAdvogadoService } from '../../service/advogado/deletarAdvogadoService';

class deletarAdvogadoController {
    async handle(req: Request, res: Response) {
        const { remover } = req.body
        const deletarAdvogadoService = new DeletarAdvogadoService()
        const apagar = await deletarAdvogadoService.execute({
            remover
        })
        return res.json(apagar)
    }
}

export { deletarAdvogadoController }