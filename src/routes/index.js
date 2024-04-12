import { Router } from 'express';
import authRoutes from "../app/auth/auth.router.js"
const router = Router();

//http:localhost:9000/api/v1
router.use('/auth', authRoutes)


export default router;