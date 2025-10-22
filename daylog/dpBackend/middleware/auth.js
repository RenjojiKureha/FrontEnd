import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/index.js';

// 认证中间件
export const authMiddleware = async (ctx, next) => {
  const token = ctx.header.authorization?.replace('Bearer ', '');
  
  if (!token) {
    ctx.status = 401;
    ctx.body = { error: 'No token provided' };
    return;
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    ctx.state.user = decoded;
    await next();
  } catch (error) {
    ctx.status = 401;
    ctx.body = { error: 'Invalid token' };
  }
};