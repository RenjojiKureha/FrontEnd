import Koa from 'koa';
import cors from '@koa/cors';
import { koaBody } from 'koa-body';
import koaStatic from 'koa-static';
import send from 'koa-send';
import path from 'path';
import { fileURLToPath } from 'url';
import { initDB } from './utils/db.js';
import { setupRoutes } from './routes/index.js';
import { errorHandler } from './middleware/errorHandler.js';
import { PORT as DEFAULT_PORT } from './config/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 前端构建目录（相对于后端目录）
const FRONTEND_DIST = path.resolve(__dirname, '../day-project/dist');

const PORT = process.env.PORT || DEFAULT_PORT || 31021;

const app = new Koa();

// 中间件
app.use(cors());
app.use(koaBody());
app.use(errorHandler);

// 挂载后端 API 路由
setupRoutes(app);

// 提供前端静态文件（dist）
app.use(koaStatic(FRONTEND_DIST));

// SPA fallback：未匹配到静态资源时返回 index.html
app.use(async (ctx) => {
  // 仅对 GET 请求做 fallback
  if (ctx.method === 'GET' && ctx.status === 404) {
    await send(ctx, 'index.html', { root: FRONTEND_DIST });
  }
});

const startServer = async () => {
  try {
    await initDB();
    console.log('Database initialized');

    app.listen(PORT, () => {
      console.log(`Combined server running on port ${PORT}`);
      console.log(`Serving static files from ${FRONTEND_DIST}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
