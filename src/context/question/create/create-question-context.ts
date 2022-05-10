import { ServerError } from "../../../middleware/error-middleware";
import { ImageRepository } from "../../../repository/image-repository";
import { QuestionRepository } from "../../../repository/question-repository";

interface CreateQuestionRequest {

    type: string,
    question: string,
    answer: string,
    options: {
        option_a: string,
        option_b: string,
        option_c: string,
        option_d: string,
    }
    images: {
        image_a: string,
        image_b: string,
        image_c: string,
        image_d: string,
    }

}

export class CreateQuestionContext {

    constructor(
        private question_repository: QuestionRepository,
        private image_repository: ImageRepository) { }

    async execute({ answer, question, type, images, options }: CreateQuestionRequest): Promise<void> {

        // Verifica itens vazios
        if (!answer || !question || !type) {
            throw new ServerError("Invalid params")
        }

        if (Object.values(options).some(o => o == "") || (Object.values(images).some(i => i == ""))) {
            throw new ServerError("Invalid Params")
        }


        // Verifica tipo de questão
        const verify_type = await this.question_repository.verify_type(type)

        if (!verify_type) {
            throw new ServerError("Invalid type")
        }

        // Verifica se imagens existem no sistema
        const imagesExits = await this.image_repository.verifyImageExist({
            images: {
                image_a: images.image_a,
                image_b: images.image_b,
                image_c: images.image_c,
                image_d: images.image_d,
            }
        })


        // Se falta alguma imagem, retorna um erro
        if (imagesExits.length != 4) {
            throw new ServerError("Image invalid")
        }

        // Se a resposta não existir nas opções retorna um erro
        if (!Object.values(options).some((o) => o == answer)) {
            throw new ServerError("answer invalid")
        }

        console.log(imagesExits.find(i => i.description === images.image_a).path)

        //  cria a questão no banco
        await this.question_repository.create({
            answer, question, type, images: {
                image_a: imagesExits.find(i => i.description === images.image_a).path,
                image_b: imagesExits.find(i => i.description === images.image_b).path,
                image_c: imagesExits.find(i => i.description === images.image_c).path,
                image_d: imagesExits.find(i => i.description === images.image_d).path,
            }, options
        })

    }

}