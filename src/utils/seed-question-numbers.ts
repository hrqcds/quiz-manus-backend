import { PrismaClient } from "@prisma/client"

export async function init_number_questions(prisma: PrismaClient) {

    await prisma.$transaction([
        prisma.question.create({
            data: {
                answer: "1",
                question: "Qual o número '1'",
                type: {
                    connect: {
                        description: "numbers"
                    }
                },
                options: {
                    create: {
                        option_a: "2",
                        option_b: "1",
                        option_c: "3",
                        option_d: "5",
                        image_a: "numbers/number_2",
                        image_b: "numbers/number_1",
                        image_c: "numbers/number_3",
                        image_d: "numbers/number_5",
                    }
                }

            }
        }),

        prisma.question.create({
            data: {
                answer: "2",
                question: "Qual o número '2'",
                type: {
                    connect: {
                        description: "numbers"
                    }
                },
                options: {
                    create: {
                        option_a: "2",
                        option_b: "7",
                        option_c: "6",
                        option_d: "0",
                        image_a: "numbers/number_2",
                        image_b: "numbers/number_7",
                        image_c: "numbers/number_6",
                        image_d: "numbers/number_0",
                    }
                }

            }
        }),

        prisma.question.create({
            data: {
                answer: "3",
                question: "Qual o número '3'",
                type: {
                    connect: {
                        description: "numbers"
                    }
                },
                options: {
                    create: {
                        option_a: "9",
                        option_b: "8",
                        option_c: "3",
                        option_d: "4",
                        image_a: "numbers/number_9",
                        image_b: "numbers/number_8",
                        image_c: "numbers/number_3",
                        image_d: "numbers/number_4",
                    }
                }

            }
        }),
    ])

    console.log("Questões com números criados com sucesso")

}