import { readDB, writeDB } from '../utils/db.js';
import { generateId } from '../utils/helpers.js';

export const getLogs = async (ctx) => {
  try {
    const db = await readDB();
    const userLogs = db.logs.filter(log => log.userId === ctx.state.user.userId);
    ctx.body = userLogs;
  } catch (error) {
    console.error('Get logs error:', error);
    ctx.status = 500;
    ctx.body = { error: 'Internal server error' };
  }
};

export const createLog = async (ctx) => {
  try {
    const { date, time, doing, checked = false } = ctx.request.body;
    
    if (!date || !time || !doing) {
      ctx.status = 400;
      ctx.body = { error: 'Date, time, and doing are required' };
      return;
    }

    const db = await readDB();
    
    const newLog = {
      id: generateId(),
      userId: ctx.state.user.userId,
      date,
      time,
      doing,
      checked: Boolean(checked),
      createdAt: new Date().toISOString()
    };
    
    db.logs.push(newLog);
    await writeDB(db);

    ctx.body = newLog;
  } catch (error) {
    console.error('Create log error:', error);
    ctx.status = 500;
    ctx.body = { error: 'Internal server error' };
  }
};

export const updateLog = async (ctx) => {
  try {
    const { id } = ctx.params;
    const updateData = ctx.request.body;

    const db = await readDB();
    const logIndex = db.logs.findIndex(log => 
      log.id === id && log.userId === ctx.state.user.userId
    );
    
    if (logIndex === -1) {
      ctx.status = 404;
      ctx.body = { error: 'Log not found' };
      return;
    }
    
    // 更新日志
    db.logs[logIndex] = {
      ...db.logs[logIndex],
      ...updateData,
      id: db.logs[logIndex].id,
      userId: db.logs[logIndex].userId
    };
    
    await writeDB(db);

    ctx.body = db.logs[logIndex];
  } catch (error) {
    console.error('Update log error:', error);
    ctx.status = 500;
    ctx.body = { error: 'Internal server error' };
  }
};

export const deleteLog = async (ctx) => {
  try {
    const { id } = ctx.params;

    const db = await readDB();
    const logIndex = db.logs.findIndex(log => 
      log.id === id && log.userId === ctx.state.user.userId
    );
    
    if (logIndex === -1) {
      ctx.status = 404;
      ctx.body = { error: 'Log not found' };
      return;
    }
    
    db.logs.splice(logIndex, 1);
    await writeDB(db);

    ctx.body = { message: 'Log deleted successfully' };
  } catch (error) {
    console.error('Delete log error:', error);
    ctx.status = 500;
    ctx.body = { error: 'Internal server error' };
  }
};