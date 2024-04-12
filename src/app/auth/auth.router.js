import { Router } from 'express';
import authCtrl from './auth.controller.js';

const router = Router();

router.post('/register', authCtrl.registerUser)
router.post('/activate/:token', (req, res, next) => { })
router.post('/login', (req, res, next) => { })
router.get('/me', (req, res, next) => { })
router.post('/forget-password', (req, res, next) => { })
router.post('/set-password/:token', (req, res, next) => { })

export default router;