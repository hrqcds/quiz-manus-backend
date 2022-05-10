import { Request, Response } from "express"
import { CreateQuestionContext } from "./create-question-context";
import { PrismaQuestionRepository } from "../../../repository/prisma/prisma-question-repository";
import { PrismaImageRepository } from "../../../repository/prisma/prisma-image-repository";


export class CreateQuestionController {

    async handle(req: Request, res: Response): Promise<Response> {

        const { answer, images, options, question, type } = req.body


        const prismaQuestionRepository = new PrismaQuestionRepository()
        const prismaImagesRepository = new PrismaImageRepository()
        const createQuestionContext = new CreateQuestionContext(prismaQuestionRepository, prismaImagesRepository)

        await createQuestionContext.execute({ answer, images, options, question, type })

        return res.status(201).send()
    }


}