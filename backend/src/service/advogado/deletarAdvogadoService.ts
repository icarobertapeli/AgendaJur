import prismaClient from "../../prisma";

interface deletarAdvogado {
    remover: string
}

class DeletarAdvogadoService {
    async execute({ remover }: deletarAdvogado) {

        const id_localizado = await prismaClient.advogado.findFirst({
            where: {
                id: remover
            }
        })
        if (!id_localizado) {
            return { info: "O ID informado não foi localizado!" }
        }
        await prismaClient.advogado.delete({
            where: {
                id: remover
            }
        })
        return { dados: "O registro apontado foi apagado com sucesso!" }
    }
}

export { DeletarAdvogadoService }