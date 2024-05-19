import prismaClient from "../../prisma";

interface AlterarAdvogado {
    id: string;
    alteraNome: string;
    alteraCpf: string;
    alteraEmail: string;
    alteraRua: string;
    alteraNumero: string;
    alteraComplemento: string;
    alteraBairro: string;
    alteraCep: string;
    alteraCidade: string;
    alteraEstado: string;
    alteraCelular: string;
    alteraOab: string;
    alteraUsuario: string;
    alteraSenha: string;
}

class AlterarAdvogadoService {
    async execute({
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
    }: AlterarAdvogado) {
        await prismaClient.advogado.update({
            where: {
                id: id,
            },
            data: {
                nome: alteraNome,
                cpf: alteraCpf,
                email: alteraEmail,
                rua: alteraRua,
                numero: alteraNumero,
                complemento: alteraComplemento,
                bairro: alteraBairro,
                cep: alteraCep,
                cidade: alteraCidade,
                estado: alteraEstado,
                celular: alteraCelular,
                oab: alteraOab,
                usuario: alteraUsuario,
                senha: alteraSenha,
            },
        });
        return { dados: "Os dados apontados foram alterados com sucesso!" };
    }
}

export { AlterarAdvogadoService };
