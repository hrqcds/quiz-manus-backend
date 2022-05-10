import { QuestionRepository } from "../../../repository/question-repository";

export class ResetStatusQuestionContext {

    constructor(private repository: QuestionRepository) { }

    async execute(): Promise<void> {
        await this.repository.reset_status()
    }

}   