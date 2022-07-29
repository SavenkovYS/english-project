export interface IQuestionAnswer {
    value: number;
    label: string;
    right: boolean;
}

export interface IQuestion {
    answers: IQuestionAnswer[];
    body: string;
    description: string;
    id: number;
}
