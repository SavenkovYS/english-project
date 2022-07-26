import { ApiError } from "../helpers/api-error";
import { Request, Response, NextFunction } from "express";

export function errorMiddleware(err: any, req: Request, res: Response, next: NextFunction) {
    console.log('[error]', err);
    if (err instanceof ApiError) {
        return res.status(err.status).json({ message: err.message, errors: err.errors });
    }
    return res.status(500).json({ message: 'Произошла ошибка сервера' });
}