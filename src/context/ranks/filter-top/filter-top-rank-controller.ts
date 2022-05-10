import { Request, Response } from "express"
import { PrismaRankRepository } from "../../../repository/prisma/prisma-rank-repository"
import { FilterTopRankContext } from "./filter-top-rank-context"

export class FilterTopRankController {


    async handle(req: Request, res: Response): Promise<Response> {

        const prismaRankRepository = new PrismaRankRepository()
        const filterTopRankContext = new FilterTopRankContext(prismaRankRepository)

        const rank = await filterTopRankContext.execute()

        return res.status(200).json({ data: rank })

    }

}