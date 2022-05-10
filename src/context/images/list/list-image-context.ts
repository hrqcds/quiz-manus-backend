import { Image } from "@prisma/client";
import { ImageRepository } from "../../../repository/image-repository";


export class ListImageContext {
    constructor(private repository: ImageRepository) { }

    async execute(): Promise<Pick<Image, "description" | "path">[]> {

        const list = await this.repository.list()

        return list
    }

}