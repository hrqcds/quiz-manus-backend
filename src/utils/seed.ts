import { prisma } from "../database/prisma";

async function init_question_type() {
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

async function seed() {

    await init_question_type()

}

seed()