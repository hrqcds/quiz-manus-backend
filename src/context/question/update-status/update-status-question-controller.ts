import { Request, Response } from "express"
import { PrismaQuestionRepository } from "../../../repository/prisma/prisma-question-repository"
import { UpdateStatusQuestionContext } from "./update-status-question-context"


export class UpdateStatusQuestionController {

    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params

        const prismaQUestionRepository = new PrismaQuestionRepository()
        const updateStatusQuestionContext = new UpdateStatusQuestionContext(prismaQUestionRepository)

        await updateStatusQuestionContext.execute(id)

        return res.status(204).send()
    }

}