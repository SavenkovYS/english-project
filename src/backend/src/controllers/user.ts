import { Request, Response, NextFunction } from 'express';
import User from "../models/user";
import * as userService from '../service/user-service';
import { validationResult } from 'express-validator';
import {ApiError} from "../helpers/api-error";

export async function signupUser(req: Request, res: Response, next: NextFunction) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next(ApiError.BadRequest('Ошибка при валидации', errors.array()))
        }
        const { login, password } = req.body;
        const userData = await userService.signup(login, password);
        res.cookie('refreshToken', userData.refreshToken, { maxAge: 3 * 24 *60 * 60 * 1000, httpOnly: true })
        return res.status(200).json(userData);
    } catch (error) {
        next(error);
    }
}

export async function login(req: Request, res: Response, next: NextFunction) {
    console.log(1)
    try {
        const { login, password } = req.body;
        const userData = await userService.login(login, password);
        res.cookie('refreshToken', userData.refreshToken, { maxAge: 3 * 24 *60 * 60 * 1000, httpOnly: true })
        return res.status(200).json(userData);
    } catch (error) {
        next(error);
    }
}

export async function logout(req: Request, res: Response, next: NextFunction) {
    try {
        const { refreshToken } = req.cookies;
        const token = await userService.logout(refreshToken);
        res.clearCookie('refreshToken');
        return res.json(token);
    } catch (error) {
        next(error);
    }
}

export async function refresh(req: Request, res: Response, next: NextFunction) {
    try {
        const { refreshToken } = req.cookies;
        const userData = await userService.refresh(refreshToken);
        if (userData) {
            res.cookie('refreshToken', userData.refreshToken, { maxAge: 3 * 24 *60 * 60 * 1000, httpOnly: true })
            return res.status(200).json(userData);
        }
        return next(ApiError.UnauthorizedError());
    } catch (error) {
        next(error);
    }
}