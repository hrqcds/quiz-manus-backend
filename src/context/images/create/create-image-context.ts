import { ServerError } from "../../../middleware/error-middleware";
import { ImageRepository } from "../../../repository/image-repository";
import { DeleteFile } from "../../../utils/delete-file";

interface CreateImageRequest {

    description: string,
    path: string,
    filename: string

}

export class CreateImageContext {
    constructor(private repository: ImageRepository) { }

    async execute({ description, path, filename }: CreateImageRequest): Promise<void> {

        if (!description || !filename || !path) {
            await DeleteFile(path)
            throw new ServerError("Invalid params", 422)
        }

        const imageExist = await this.repository.findByDescription(description)

        if (imageExist) {
            await DeleteFile(path)
            throw new ServerError("Image already Exist", 400)
        }

        await this.repository.create({ description, path: filename })

    }
}