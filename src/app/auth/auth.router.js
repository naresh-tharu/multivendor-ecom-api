import { Router } from 'express';
import authCtrl from './auth.controller.js';
import { registerSchema } from './auth.validator.js';
import validateRequest from '../../middlewares/validator.middleware.js';

const router = Router();

router.post('/register', validateRequest(registerSchema), authCtrl.registerUser)
router.post('/activate/:token', (req, res, next) => { })
router.post('/login', (req, res, next) => { })
router.get('/me', (req, res, next) => { })
router.post('/forget-password', (req, res, next) => { })
router.post('/set-password/:token', (req, res, next) => { })

export default router;