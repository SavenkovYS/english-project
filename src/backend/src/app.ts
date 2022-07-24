import express, {Application, NextFunction, Response, Request} from "express";
// import bodyParser from "body-parser";
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import sequelize from './utils/database';
import questionRoutes from './routes/question';
import userRoutes from './routes/user';
import { errorMiddleware } from "./middleware/error-middleware";

dotenv.config();
const app: Application = express();

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.urlencoded())
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));
app.use(cookieParser());

// app.use((req: Request, res: Response, next: NextFunction) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader(
//         'Access-Control-Allow-Methods',
//         'OPTIONS, GET, POST, PUT, PATCH, DELETE'
//     );
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// });

app.use('/question', questionRoutes);
app.use('/user', userRoutes);
app.use(errorMiddleware);

sequelize
    .authenticate()
    .then(() => {
        console.log('connected');
        app.listen(process.env.PORT || 3000);
    })
    .catch((err) => {
        console.log(err);
    })