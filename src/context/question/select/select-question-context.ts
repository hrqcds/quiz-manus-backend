import { ServerError } from "../../../middleware/error-middleware";
import { QuestionRepository } from "../../../repository/question-repository";

interface SelectQuestionRequest {

    question: string;
    answer: string;
    options: {
        image_a: string;
        image_b: string;
        image_c: string;
        image_d: string;
        option_a: string;
        option_b: string;
        option_c: string;
        option_d: string;
    };
    status: boolean;
    created_at: Date;

}

export class SelectQuestionContext {

    constructor(private repository: QuestionRepository) { }

    async execute(type: string): Promise<SelectQuestionRequest> {

        if (!type) {
            throw new ServerError("invalid params", 422)
        }

        const verify_type = await this.repository.verify_type(type)

        if (!verify_type) {
            throw new ServerError("type invalid")
        }

        const question = await this.repository.select(type)

        return question

    }

}