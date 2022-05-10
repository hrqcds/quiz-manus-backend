import { QuestionRepository } from "../../../repository/question-repository"

interface ListQuestionRequest {

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

export class ListQuestionContext {

    constructor(private repository: QuestionRepository) { }

    async execute(): Promise<ListQuestionRequest[]> {

        const list = await this.repository.list()

        return list

    }

}