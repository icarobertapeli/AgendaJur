import { Request, Response } from "express";
import { AlterarAdvogadoService } from "../../service/advogado/alterarAdvogadoService";

class alterarAdvogadoController {
    async handle(req: Request, res: Response) {
        const {
            id,
            alteraNome,
            alteraCpf,
            alteraEmail,
            alteraRua,
            alteraNumero,
            alteraComplemento,
            alteraBairro,
            alteraCep,
            alteraCidade,
            alteraEstado,
            alteraCelular,
            alteraOab,
            alteraUsuario,
            alteraSenha,
        } = req.body;

        const alterarAdvogadoService = new AlterarAdvogadoService();
        const edit = await alterarAdvogadoService.execute({
            id,
            alteraNome,
            alteraCpf,
            alteraEmail,
            alteraRua,
            alteraNumero,
            alteraComplemento,
            alteraBairro,
            alteraCep,
            alteraCidade,
            alteraEstado,
            alteraCelular,
            alteraOab,
            alteraUsuario,
            alteraSenha,
        });

        return res.json(edit);
    }
}

export { alterarAdvogadoController };
