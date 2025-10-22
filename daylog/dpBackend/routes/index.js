import authRoutes from './auth.js';
import logRoutes from './logs.js';

export const setupRoutes = (app) => {
  // 健康检查端点
  app.use(async (ctx, next) => {
    if (ctx.path === '/api/health') {
      ctx.body = { status: 'OK', timestamp: new Date().toISOString() };
      return;
    }
    await next();
  });
  
  // 认证路由
  app.use(authRoutes.routes());
  app.use(authRoutes.allowedMethods());
  
  // 日志路由
  app.use(logRoutes.routes());
  app.use(logRoutes.allowedMethods());
};