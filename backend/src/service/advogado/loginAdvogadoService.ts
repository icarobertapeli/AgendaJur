import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface Login {
    usuario: string
    password: string
}

class LoginAdvogadoService {
    async execute({ usuario, password }: Login) {
        const advogado = await prismaClient.advogado.findFirst({
            where: {
                usuario: usuario
            }
        })
        if (!advogado) {
            throw new Error("Dados incorretos. Por favor, tente de novo.")
        }

        const autenticado = await compare(password, advogado.senha)
        if (!autenticado) {
            throw new Error("Dados incorretos. Por favor, tente de novo.")
        }

        const token = sign(
            {
                id: advogado.id,
                usuario: advogado.usuario
            },
            process.env.JWT_SEGREDO,
            {
                subject: advogado.id,
                expiresIn: "1h"
            }
        )

        return {
            id: advogado.id,
            usuario: advogado.usuario,
            token: token
        }
    }
}

export { LoginAdvogadoService }