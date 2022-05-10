import { Request, Response } from "express";
import { PrismaQuestionRepository } from "../../../repository/prisma/prisma-question-repository";
import { SelectQuestionContext } from "./select-question-context";

export class SelectQuestionController {

    async handle(req: Request, res: Response): Promise<Response> {
        const { type } = req.body

        const prismaQuestionRepository = new PrismaQuestionRepository()
        const selectQuestionContext = new SelectQuestionContext(prismaQuestionRepository)

        const question = await selectQuestionContext.execute(type)

        return res.status(200).json({ data: question })
    }

}