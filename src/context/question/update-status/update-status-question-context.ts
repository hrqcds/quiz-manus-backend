import { ServerError } from "../../../middleware/error-middleware";
import { QuestionRepository } from "../../../repository/question-repository";

export class UpdateStatusQuestionContext {

    constructor(private repository: QuestionRepository) { }

    async execute(id: string): Promise<void> {

        if (!id) {
            throw new ServerError("invalid params", 422)
        }

        const questionExist = await this.repository.find_by_id(id)

        if (!questionExist) {
            throw new ServerError("question don't exists")
        }

        await this.repository.update_status(id)
    }
}