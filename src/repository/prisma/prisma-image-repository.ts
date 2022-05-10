import { CreateImageData, ImageRepository, VerifyImageData } from "../image-repository"
import { prisma } from "../../database/prisma"
import { Image } from "@prisma/client"

export class PrismaImageRepository implements ImageRepository {

    async create({ description, path }: CreateImageData): Promise<void> {

        await prisma.image.create({
            data: {
                description,
                path
            }
        })

    }

    async list(): Promise<Pick<Image, "description" | "path">[]> {

        const list = await prisma.image.findMany({
            select: {
                description: true, path: true
            }
        })

        return list
    }

    async findByDescription(description: string): Promise<Image> {

        const image = await prisma.image.findUnique({
            where: {
                description
            }
        })

        return image

    }

    async verifyImageExist({ images }: VerifyImageData): Promise<Image[]> {
        const imagesExists = await prisma.image.findMany({
            where: {
                OR: [
                    {
                        description: {
                            equals: images.image_a
                        }
                    },
                    {
                        description: {
                            equals: images.image_b
                        }
                    },
                    {
                        description: {
                            equals: images.image_c
                        }
                    },
                    {
                        description: {
                            equals: images.image_d
                        }
                    },
                    
                ]

            }
        })

        return imagesExists
    }

}