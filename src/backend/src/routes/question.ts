import { Router } from "express";
import * as questionController from '../controllers/order';
import { authMiddleware } from "../middleware/auth-middleware";

const router = Router();

router.get('/get-questions', authMiddleware, questionController.getQuestions);

export default router;