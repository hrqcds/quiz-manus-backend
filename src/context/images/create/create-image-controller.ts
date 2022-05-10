import { Request, Response } from "express"
import { PrismaImageRepository } from "../../../repository/prisma/prisma-image-repository"
import { CreateImageContext } from "./create-image-context"

export class CreateImageController {

    async handle(req: Request, res: Response): Promise<Response> {

        const repository = new PrismaImageRepository()
        const createImageContext = new CreateImageContext(repository)

        await createImageContext.execute({
            description: req.body.description,
            path: req.file.path,
            filename: req.file.filename
        })

        return res.status(201).send()

    }

}