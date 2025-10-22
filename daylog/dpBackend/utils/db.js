import { promises as fs } from 'fs';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'db.json');

// 初始化数据库文件
export const initDB = async () => {
  try {
    await fs.access(DB_PATH);
  } catch (error) {
    const initialData = { users: [], logs: [] };
    await fs.writeFile(DB_PATH, JSON.stringify(initialData, null, 2));
  }
};

// 读取数据库
export const readDB = async () => {
  try {
    const data = await fs.readFile(DB_PATH, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading database:', error);
    return { users: [], logs: [] };
  }
};

// 写入数据库
export const writeDB = async (data) => {
  try {
    await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error writing database:', error);
    throw error;
  }
};