import { UserInstance } from "../models/user";

export class UserDto {
    login: string;
    id: number;

    constructor(model: UserInstance) {
        this.login = model.login
        this.id = model.id
    }
}