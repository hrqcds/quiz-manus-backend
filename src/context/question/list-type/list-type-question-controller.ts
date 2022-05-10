import { Request, Response } from "express"
import { PrismaQuestionRepository } from "../../../repository/prisma/prisma-question-repository"
import { ListTypeQuestionContext } from "./list-type-question-context"

export class ListTypeQuestionController {

    async handle(req: Request, res: Response): Promise<Response> {

        const prismaQuestionRepository = new PrismaQuestionRepository()
        const listTypeQuestionContext = new ListTypeQuestionContext(prismaQuestionRepository)

        const list_type = await listTypeQuestionContext.execute()

        return res.status(200).json({ data: list_type })

    }

}