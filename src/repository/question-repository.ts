import { Question, Question_Type } from "@prisma/client"

export interface CreateOptionsData {
    option_a: string,
    option_b: string,
    option_c: string,
    option_d: string,
}

export interface CreateImagesData {
    image_a: string,
    image_b: string,
    image_c: string,
    image_d: string,
}

export interface CreateQuestionData {
    type: string,
    question: string,
    answer: string,
    options: CreateOptionsData,
    images: CreateImagesData
}

export interface ListQuestionData {
    id: number,
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
    type: {
        description: string
    },
    status: boolean;
    created_at: Date;

}

export interface QuestionRepository {
    create: (data: CreateQuestionData) => Promise<void>
    verify_type: (type: string) => Promise<Question_Type>
    list_type: () => Promise<Pick<Question_Type, "description">[]>
    list: () => Promise<ListQuestionData[]>
    select: (type: string) => Promise<ListQuestionData>
    update_status: (id: string) => Promise<void>
    reset_status: () => Promise<void>
    find_by_id: (id: string) => Promise<Pick<Question, "id">>
} 