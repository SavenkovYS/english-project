import express, {Application, NextFunction, Response, Request} from "express";
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import sequelize from './utils/database';
import questionRoutes from './routes/question';
import userRoutes from './routes/user';
import { errorMiddleware } from "./middleware/error-middleware";

dotenv.config();
const app: Application = express();

app.use(express.json());
app.use(express.urlencoded())
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5000'
}));
app.use(cookieParser());

app.use('/question', questionRoutes);
app.use('/user', userRoutes);
app.use(errorMiddleware);

sequelize
    .authenticate()
    .then(() => {
        app.listen(process.env.PORT || 3000);
    })
    .catch((err) => {
        console.log(err);
    })