import { PrismaClient } from "@prisma/client"

export async function init_question_type(prisma: PrismaClient) {
    await prisma.question_Type.create({
        data: {
            description: "numbers"
        }
    })

    await prisma.question_Type.create({
        data: {
            description: "caracters"
        }
    })

    await prisma.question_Type.create({
        data: {
            description: "random"
        }
    })

    console.log("tipos de perguntas criado com sucesso")
}
