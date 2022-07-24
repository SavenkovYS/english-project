import { Router } from "express";
import * as userController from '../controllers/user';
import { body } from 'express-validator';

const router = Router();

router.post('/signup-user',
    body('login').isString(),
    body('password').isLength({ min: 3, max: 32 }),
    userController.signupUser);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
// router.get('/activate/:link')
router.get('/refresh', userController.refresh);

export default router;