import { PrismaClient } from "@prisma/client"

export async function init_caracter_questions(prisma: PrismaClient) {

    await prisma.$transaction([
        prisma.question.create({
            data: {
                answer: "a",
                question: "Qual a letra 'A'",
                type: {
                    connect: {
                        description: "caracters"
                    }
                },
                options: {
                    create: {
                        option_a: "r",
                        option_b: "a",
                        option_c: "f",
                        option_d: "g",
                        image_a: "caracters/caracter_r",
                        image_b: "caracters/caracter_a",
                        image_c: "caracters/caracter_f",
                        image_d: "caracters/caracter_g",
                    }
                }

            }
        }),

        prisma.question.create({
            data: {
                answer: "b",
                question: "Qual a letra 'B'",
                type: {
                    connect: {
                        description: "caracters"
                    }
                },
                options: {
                    create: {
                        option_a: "b",
                        option_b: "e",
                        option_c: "u",
                        option_d: "h",
                        image_a: "caracters/caracter_b",
                        image_b: "caracters/caracter_e",
                        image_c: "caracters/caracter_u",
                        image_d: "caracters/caracter_h",
                    }
                }

            }
        }),

        prisma.question.create({
            data: {
                answer: "c",
                question: "Qual a letra 'C'",
                type: {
                    connect: {
                        description: "caracters"
                    }
                },
                options: {
                    create: {
                        option_a: "e",
                        option_b: "c",
                        option_c: "b",
                        option_d: "f",
                        image_a: "caracters/caracter_e",
                        image_b: "caracters/caracter_c",
                        image_c: "caracters/caracter_b",
                        image_d: "caracters/caracter_f",
                    }
                }

            }
        }),
    ])

    console.log("Questões com letras criadas com sucesso")

}