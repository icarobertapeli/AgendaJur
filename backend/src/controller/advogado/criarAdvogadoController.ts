import { Request, Response } from 'express';
import { CriarAdvogadoService } from '../../service/advogado/criarAdvogadoService';

class criarAdvogadoController {
    async handle(req: Request, res: Response) {
        const { nome, cpf, cnpj, email, rua, numero, complemento, bairro, cep, cidade, estado, celular, oab, usuario, password } = req.body;
        const criarAdvogadoService = new CriarAdvogadoService();
        const resposta = await criarAdvogadoService.execute({
            nome, cpf, cnpj, email, rua, numero, complemento, bairro, cep, cidade, estado, celular, oab, usuario, password
        });
        return res.json(resposta);
    }
}

export { criarAdvogadoController };