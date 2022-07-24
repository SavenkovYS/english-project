import { Request, Response } from 'express';
import Question from "../models/question";
import {Sequelize} from "sequelize";

export async function getQuestions(req: Request, res: Response) {
    const questions = await Question.findAll({ order: [Sequelize.fn('RANDOM')], limit: 3 });
    return res.status(200).json(questions);
}