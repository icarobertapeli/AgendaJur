import prismaClient from "../../prisma";

class ListarAdvogadosService {
    async execute() {
        const listarAdvogados = await prismaClient.advogado.findMany({
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
                senha: true,
                create_at: true,
                update_at: true
            }
        })
        return (listarAdvogados)
    }
}

export { ListarAdvogadosService }