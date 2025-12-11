import express from 'express';
import { createInitialUser, getUsers,loginUser } from '../controllers/authController.js';

const router = express.Router();

router.post('/user', createInitialUser);
router.get('/user', getUsers);
router.post('/login',loginUser);

export default router;