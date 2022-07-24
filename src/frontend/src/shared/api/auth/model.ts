export interface IUser {
    login: string,
    password: string,
    accessToken: string,
    refreshToken: string
}

export interface IAuthProps {
    login: string,
    password: string
}