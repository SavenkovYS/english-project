import {STRING, Optional, Model, INTEGER} from "sequelize";

import sequelize from '../utils/database';

interface UserAttributes {
    id: number;
    login: string,
    password: string,
    refresh_token: string
}

type UserCreationAttributes = Optional<
    UserAttributes,
    'id' | 'login' | 'password' | 'refresh_token'
    >

export interface UserInstance extends Model<UserAttributes, UserCreationAttributes>, UserAttributes {}

const Question = sequelize.define<UserInstance>(
    'User',
    {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        login: {
            type: STRING
        },
        password: {
            type: STRING
        },
        refresh_token: {
            type: STRING
        }
    },
    {
        tableName: 'user',
        timestamps: false
    }
);

export default Question;