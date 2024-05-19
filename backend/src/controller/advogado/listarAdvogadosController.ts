import { Request, Response } from 'express';
import { ListarAdvogadosService } from '../../service/advogado/listarAdvogadosService';

class listarAdvogadosController {
    async handle(req: Request, res: Response) {
        const listarAdvogadosService = new ListarAdvogadosService()
        const listarAdvogados = await listarAdvogadosService.execute()

        return res.json(listarAdvogados)
    }
}

export { listarAdvogadosController }