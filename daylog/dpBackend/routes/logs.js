import Router from 'koa-router';
import { authMiddleware } from '../middleware/auth.js';
import { getLogs, createLog, updateLog, deleteLog } from '../controllers/logController.js';

const router = new Router({ prefix: '/api' });

// 日志路由（每个都应用认证中间件）
router.get('/logs', authMiddleware, getLogs);
router.post('/logs', authMiddleware, createLog);
router.put('/logs/:id', authMiddleware, updateLog);
router.delete('/logs/:id', authMiddleware, deleteLog);

export default router;