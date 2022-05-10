import { Request, Response } from "express"
import { PrismaImageRepository } from "../../../repository/prisma/prisma-image-repository"
import { ListImageContext } from "./list-image-context"

export class ListImageController {

    async handle(req: Request, res: Response): Promise<Response> {

        const repository = new PrismaImageRepository()
        const listImageContext = new ListImageContext(repository)

        const list = await listImageContext.execute()

        return res.status(200).json({ data: list })

    }

}