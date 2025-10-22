import Koa from 'koa';
import cors from '@koa/cors';
import { koaBody } from 'koa-body';
import { initDB } from './utils/db.js';
import { setupRoutes } from './routes/index.js';
import { errorHandler } from './middleware/errorHandler.js';
import { PORT } from './config/index.js';

const app = new Koa();

// 中间件
app.use(cors());
app.use(koaBody());
app.use(errorHandler);

// 设置路由
setupRoutes(app);

// 初始化数据库并启动服务器
const startServer = async () => {
  try {
    await initDB();
    console.log('Database initialized');
    
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();