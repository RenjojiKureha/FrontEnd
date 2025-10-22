import Router from 'koa-router';
import { register, login } from '../controllers/authController.js';

const router = new Router({ prefix: '/api' });

// 用户注册
router.post('/register', register);

// 用户登录
router.post('/login', login);

export default router;