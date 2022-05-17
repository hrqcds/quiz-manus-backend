import { init_question_type } from "./seed-type";
import { prisma } from "../database/prisma";
import { init_images_caracters, init_images_numbers } from "./seed-images";
import { init_caracter_questions } from "./seed-question-caracters";


async function seed() {

    await init_question_type(prisma)
    await init_images_caracters(prisma)
    await init_images_numbers(prisma)
    await init_caracter_questions(prisma)

}

seed()