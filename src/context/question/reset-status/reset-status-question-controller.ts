import { Request, Response } from "express"
import { PrismaQuestionRepository } from "../../../repository/prisma/prisma-question-repository"
import { ResetStatusQuestionContext } from "./reset-status-question-context"

export class ResetStatusQuestionController {

    async handle(req: Request, res: Response): Promise<Response> {

        const prismaQuestionRepository = new PrismaQuestionRepository()
        const resetStatusQuestionContext = new ResetStatusQuestionContext(prismaQuestionRepository)

        await resetStatusQuestionContext.execute()

        return res.status(204).send()
    }
}