import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/index.js';
import { readDB, writeDB } from '../utils/db.js';
import { generateId, isValidEmail } from '../utils/helpers.js';

export const register = async (ctx) => {
  try {
    const { username, email, password } = ctx.request.body;
    
    if (!username || !email || !password) {
      ctx.status = 400;
      ctx.body = { error: 'All fields are required' };
      return;
    }

    if (!isValidEmail(email)) {
      ctx.status = 400;
      ctx.body = { error: 'Invalid email format' };
      return;
    }

    const db = await readDB();
    
    // 检查用户是否存在
    const existingUser = db.users.find(user => 
      user.email === email || user.username === username
    );
    
    if (existingUser) {
      ctx.status = 400;
      ctx.body = { error: 'User already exists' };
      return;
    }

    // 加密密码
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // 创建用户
    const user = {
      id: generateId(),
      username,
      email,
      password: hashedPassword,
      createdAt: new Date().toISOString()
    };
    
    db.users.push(user);
    await writeDB(db);

    // 生成 token
    const token = jwt.sign(
      { userId: user.id, username: user.username },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    ctx.body = {
      message: 'User created successfully',
      token,
      user: { id: user.id, username: user.username, email: user.email }
    };
  } catch (error) {
    console.error('Registration error:', error);
    ctx.status = 500;
    ctx.body = { error: 'Internal server error' };
  }
};

export const login = async (ctx) => {
  try {
    const { email, password } = ctx.request.body;

    console.log(ctx.request.body);

    if (!email || !password) {
      ctx.status = 400;
      ctx.body = { error: 'Email and password are required' };
      return;
    }

    const db = await readDB();
    
    // 查找用户
    const user = db.users.find(u => u.email === email);

    // 箭头函数的原始写法
    // const user = db.users.find((u)=>{
    //   return u.email === email
    // });
    
    // 传统等价写法
    // for (let index = 0; index < db.users.length; index++) {
    //   const element = db.users[index];
    //   if(element.email === email){
    //     user = element
    //     break;
    //   }
    // }


    if (!user) {
      ctx.status = 401;
      ctx.body = { error: 'Invalid credentials' };
      return;
    }

    // 验证密码
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      ctx.status = 401;
      ctx.body = { error: 'Invalid credentials' };
      return;
    }

    // 生成 token
    const token = jwt.sign(
      { userId: user.id, username: user.username },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    ctx.body = {
      message: 'Login successful',
      token,
      user: { id: user.id, username: user.username, email: user.email }
    };
  } catch (error) {
    console.error('Login error:', error);
    ctx.status = 500;
    ctx.body = { error: 'Internal server error' };
  }
};