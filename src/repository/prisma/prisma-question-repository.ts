import { CreateQuestionData, ListQuestionData, QuestionRepository } from "../question-repository";
import { prisma } from "../../database/prisma"
import { Question, Question_Type } from "@prisma/client";

export class PrismaQuestionRepository implements QuestionRepository {

    async create({ question, answer, type, options, images }: CreateQuestionData) {
        await prisma.question.create({
            data: {
                question,
                answer,
                type: {
                    connectOrCreate: {
                        where: {
                            description: type,
                        },
                        create: {
                            description: type
                        }
                    }
                },
                options: {
                    create: {
                        option_a: options.option_a,
                        option_b: options.option_b,
                        option_c: options.option_c,
                        option_d: options.option_d,
                        image_a: images.image_a,
                        image_b: images.image_b,
                        image_c: images.image_c,
                        image_d: images.image_d
                    }
                }

            }
        })
    };

    async verify_type(type: string): Promise<Question_Type> {
        const question_type = await prisma.question_Type.findUnique({
            where: {
                description: type
            }
        })

        return question_type
    };

    async list(): Promise<ListQuestionData[]> {

        const list = await prisma.question.findMany({
            where: {
                status: true
            },
            select: {
                id: true,
                answer: true,
                question: true,
                status: true,
                options: {
                    select: {
                        image_a: true,
                        image_b: true,
                        image_c: true,
                        image_d: true,
                        option_a: true,
                        option_b: true,
                        option_c: true,
                        option_d: true,
                    }
                },
                type: {
                    select: {
                        description: true
                    }
                },
                created_at: true
            }
        })

        return list
    }

    async select(type: string): Promise<ListQuestionData> {

        const list = await prisma.question.findMany({
            where: {
                AND: [
                    {
                        type: {
                            description: type
                        }
                    },
                    {
                        status: true
                    }
                ]

            },
            select: {
                id: true,
                answer: true,
                question: true,
                status: true,
                options: {
                    select: {
                        image_a: true,
                        image_b: true,
                        image_c: true,
                        image_d: true,
                        option_a: true,
                        option_b: true,
                        option_c: true,
                        option_d: true,
                    }
                },
                type: {
                    select: {
                        description: true
                    }
                },
                created_at: true
            }
        })

        const randomPos = Math.floor(Math.random() * list.length)

        return list[randomPos]
    };

    async update_status(id: string): Promise<void> {
        await prisma.question.update({
            where: {
                id: Number(id)
            },
            data: {
                status: false
            }
        })
    }

    async reset_status(): Promise<void> {
        await prisma.question.updateMany({
            where: {
                status: false
            },
            data: {
                status: true
            }
        })
    }

    async find_by_id(id: string): Promise<Pick<Question, "id">> {

        const question = await prisma.question.findUnique({ where: { id: Number(id) } })

        return question
    }

    async list_type(): Promise<Pick<Question_Type, "description">[]> {

        const questions_type = await prisma.question_Type.findMany({
            select: {
                description: true
            },
            orderBy: {
                description: "asc"
            }
        })

        return questions_type
    }



}