// 错误处理中间件
export const errorHandler = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    console.error('Server error:', error);
    ctx.status = error.status || 500;
    ctx.body = { 
      error: error.message || 'Internal server error',
      ...(process.env.NODE_ENV === 'development' && { stack: error.stack })
    };
  }
};