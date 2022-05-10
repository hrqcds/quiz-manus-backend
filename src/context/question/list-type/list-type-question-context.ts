import { Question_Type } from "@prisma/client"
import { QuestionRepository } from "../../../repository/question-repository"

export class ListTypeQuestionContext {

    constructor(private repository: QuestionRepository) { }

    async execute(): Promise<Pick<Question_Type, "description">[]> {

        const list_type = await this.repository.list_type()

        return list_type
    }

}