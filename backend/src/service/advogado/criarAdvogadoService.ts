import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface criarAdvogado {
    nome: string;
    cpf: string;
    cnpj: string;
    email: string;
    rua: string;
    numero: string;
    complemento: string;
    bairro: string;
    cep: string;
    cidade: string;
    estado: string;
    celular: string;
    oab: string;
    usuario: string;
    password: string;
}

class CriarAdvogadoService {
    async execute({ nome, cpf, cnpj, email, rua, numero, complemento, bairro, cep, cidade, estado, celular, oab, usuario, password }: criarAdvogado) {
        if (!nome || !cpf || !email || !rua || !numero || !bairro || !cep || !cidade || !estado || !celular || !oab || !usuario || !password) {
            throw new Error("Por favor, preencha todos os campos!");
        }
        const usuarioExiste = await prismaClient.advogado.findFirst({
            where: {
                usuario: usuario
            }
        });
        if (usuarioExiste) {
            throw new Error("O usuário informado já está cadastrado!");
        }
        const senhaCrypt = await hash(password, 8);
        const resposta = await prismaClient.advogado.create({
            data: {
                nome: nome,
                cpf: cpf,
                cnpj: cnpj,
                email: email,
                rua: rua,
                numero: numero,
                complemento: complemento,
                bairro: bairro,
                cep: cep,
                cidade: cidade,
                estado: estado,
                celular: celular,
                oab: oab,
                usuario: usuario,
                senha: senhaCrypt
            },
            select: {
                id: true,
                nome: true,
                cpf: true,
                cnpj: true,
                email: true,
                rua: true,
                numero: true,
                complemento: true,
                bairro: true,
                cep: true,
                cidade: true,
                estado: true,
                celular: true,
                oab: true,
                usuario: true,
                senha: true
            }
        });
        return resposta;
    }
}

export { CriarAdvogadoService };