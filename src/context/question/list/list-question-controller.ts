import { Request, Response } from "express"
import { PrismaQuestionRepository } from "../../../repository/prisma/prisma-question-repository"
import { ListQuestionContext } from "./list-question-context"

export class ListQuestionController {


    async handle(req: Request, res: Response): Promise<Response> {

        const prismaQuestionRepository = new PrismaQuestionRepository()
        const listQuestionContext = new ListQuestionContext(prismaQuestionRepository)

        const list = await listQuestionContext.execute()

        return res.status(200).json({ data: list })
    }

}