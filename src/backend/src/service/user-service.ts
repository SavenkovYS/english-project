import User from "../models/user";
import bcrypt from 'bcryptjs';
// import uuid from 'uuid';
// import * as mailService from './mail-service';
import * as tokenService from './token-service';
import {UserDto} from "../dtos/user-dto";
import { ApiError } from "../helpers/api-error";

export async function signup(login: string, password: string) {
    const candidate = await User.findOne({ where: { login } });
    console.log('candidate', candidate)
    if (candidate) {
        throw ApiError.BadRequest('Пользователь с таким именем уже существует');
    }
    const hashedPassword = await bcrypt.hash(password, 3);
    // const activationLink = uuid.v4();
    const user = await User.create({ login, password: hashedPassword });
    // await mailService.sendActivationMail(email, activationLink)
    // const user = await User.create({ login, password: hashedPassword, activationLink });
    const userDto = new UserDto(user);
    const tokens = tokenService.generateToken({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
        ...tokens,
        user: userDto
    }
}

export async function login(login: string, password: string) {
    const user = await User.findOne({ where: { login } });
    if (!user) {
        throw ApiError.BadRequest('Пользователь с таким именем не найден');
    }
    const isPasswordEqual = await bcrypt.compare(password, user.password);
    if (!isPasswordEqual) {
        throw ApiError.BadRequest('Неверный пароль');
    }
    const userDto = new UserDto(user);
    const tokens = tokenService.generateToken({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
        ...tokens,
        user: userDto
    }
}

export async function logout(refreshToken: string) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
}

export async function refresh(refreshToken: string) {
    if (!refreshToken) {
        throw ApiError.UnauthorizedError();
    }
    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);
    if (!userData || !tokenFromDb) {
        throw ApiError.UnauthorizedError();
    }
    const user = await User.findOne({ where: {refresh_token: refreshToken } });
    if (user) {
        const userDto = new UserDto(user);
        const tokens = tokenService.generateToken({ ...userDto });
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {
            ...tokens,
            user: userDto
        }
    }
}