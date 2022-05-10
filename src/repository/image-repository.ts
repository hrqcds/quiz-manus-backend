import { Image } from "@prisma/client"

export interface CreateImageData {
    description: string,
    path: string
}

export interface VerifyImageData {
    images: {
        image_a: string,
        image_b: string,
        image_c: string,
        image_d: string,
    }
}

export interface ImageRepository {
    create: (data: CreateImageData) => Promise<void>
    list: () => Promise<Pick<Image, "description" | "path">[]>
    findByDescription: (description: string) => Promise<Image>
    verifyImageExist: (data: VerifyImageData) => Promise<Image[]>
}