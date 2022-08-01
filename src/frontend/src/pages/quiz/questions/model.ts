import { IQuestion } from '@/shared/api/question/model';

export interface IQuizAnswer {
    question: IQuestion,
    userAnswerValue: string
}
