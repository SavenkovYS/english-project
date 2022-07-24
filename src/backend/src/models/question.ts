import {STRING, JSON, Optional, Model, INTEGER} from "sequelize";

import sequelize from '../utils/database';

interface QuestionAttributes {
    id: number;
    body: string,
    answers: string,
    description: string
}

type QuestionCreationAttributes = Optional<
    QuestionAttributes,
    'id' | 'body' | 'answers' | 'description'
>

interface QuestionInstance extends Model<QuestionAttributes, QuestionCreationAttributes>, QuestionAttributes {}

const Question = sequelize.define<QuestionInstance>(
    'Question',
    {
        id: {
            type: INTEGER,
            allowNull: false,
            primaryKey: true
        },
        body: {
            type: STRING
        },
        answers: {
            type: JSON
        },
        description: {
            type: STRING
        }
    },
    {
        tableName: 'question',
        timestamps: false
    }
);

export default Question;