import express from 'express';
import { signIn, Signup } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', Signup);
router.post('/signin',signIn);

export default router;