import { Request, Response } from "express"
import { PrismaRankRepository } from "../../../repository/prisma/prisma-rank-repository"
import { RegisterRankContext } from "./register-rank-context"

export class RegisterRankController {


    async handle(req: Request, res: Response): Promise<Response> {

        const { name, points } = req.body

        const prismaRankRepository = new PrismaRankRepository()
        const registerRankContext = new RegisterRankContext(prismaRankRepository)

        await registerRankContext.execute({ name, points })

        return res.status(201).send()
        
    }

}