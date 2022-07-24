import jwt, {Secret} from 'jsonwebtoken'
import dotenv from "dotenv";
import User from "../models/user";

dotenv.config();

export function generateToken(payload: object) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET as string, { expiresIn: '30m' });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET as string, { expiresIn: '30d' });
    return {
        accessToken,
        refreshToken
    }
}

export function validateAccessToken(token: string) {
    try {
        const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET as Secret);
        return userData;
    } catch (error) {
        return null;
    }
}

export function validateRefreshToken(token: string) {
    try {
        const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET as Secret);
        return userData;
    } catch (error) {
        return null;
    }
}

export async function saveToken(userId: number, refreshToken: string) {
    const user = await User.findOne({  where: { id: userId } })
    if (user) {
        user.refresh_token = refreshToken;
        return await user.save();
    }
}

export async function removeToken(refreshToken: string) {
    const user = await User.findOne({ where: { refresh_token: refreshToken }});
    if (user) {
        user.refresh_token = '';
        return await user.save();
    }
}

export async function findToken(refreshToken: string) {
    const user = await User.findOne({ where: { refresh_token: refreshToken }});
    if (user) {
        return user.refresh_token;
    }
}