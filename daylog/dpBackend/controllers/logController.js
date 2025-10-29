import { readDB, writeDB } from '../utils/db.js';
import { generateId } from '../utils/helpers.js';

export const getLogs = async (ctx) => {
  try {

    // 把等来的数据库赋给db
    const db = await readDB();

    // 筛出来当前用户的赋给userLogs
    const userLogs = db.logs.filter(log => log.userId === ctx.state.user.userId);
    ctx.body = userLogs;

  } catch (error) {
    // 出错了就打印和返回
    console.error('Get logs error:', error);
    ctx.status = 500;
    ctx.body = { error: 'Internal server error' };
  }
};

export const createLog = async (ctx) => {
  try {

    // 依旧获取数组合订本，然后这个checked默认false
    const { date, time, doing, checked = false } = ctx.request.body;

    // 这仨任意一个为空就报错
    if (!date || !time || !doing) {
      ctx.status = 400;
      ctx.body = { error: 'Date, time, and doing are required' };
      return;
    }

    // 依旧读来的数据赋给db
    const db = await readDB();
    
    // 给新建的log对象赋值
    const newLog = {
      id: generateId(),
      userId: ctx.state.user.userId,
      date,
      time,
      doing,
      checked: Boolean(checked),
      createdAt: new Date().toISOString()
    };
    
    // 把新log push到db队尾
    db.logs.push(newLog);
    // 写回数据库
    await writeDB(db);
    // 给形参的body赋值新log
    ctx.body = newLog;

  } catch (error) {
    // 出错了就打印和返回
    console.error('Create log error:', error);
    ctx.status = 500;
    ctx.body = { error: 'Internal server error' };
  }
};

// 这集是更新
export const updateLog = async (ctx) => {
  try {
    // 送来的id赋给id
    const { id } = ctx.params;
    // 送来的数据赋给updateData
    const updateData = ctx.request.body;
    
    // 数据库赋给db
    const db = await readDB();
    // 找到符合条件的赋值给logIndex
    const logIndex = db.logs.findIndex(log => 
      log.id === id && log.userId === ctx.state.user.userId
      // 条件是这俩都得是真，也就是logid和userId都得匹配
    );
    
    // 不符合上面那个就会返回给logindex赋值-1
    // 也就是没有，没有就报错
    if (logIndex === -1) {
      ctx.status = 404;
      ctx.body = { error: 'Log not found' };
      return;
    }
    
    // 更新日志
    db.logs[logIndex] = {
      ...db.logs[logIndex],
      ...updateData,// 把送来的数据覆盖掉原来的
      id: db.logs[logIndex].id,
      userId: db.logs[logIndex].userId
      // 保持id和userId不变
    };


    // 把更新的写进去
    await writeDB(db);

    // 响应更新后的
    ctx.body = db.logs[logIndex];

  } catch (error) {
    // 出错了就打印和返回
    console.error('Update log error:', error);
    ctx.status = 500;
    ctx.body = { error: 'Internal server error' };
  }
};

export const deleteLog = async (ctx) => {
  try {

    // 依旧得id
    const { id } = ctx.params;
    // 读数据库赋给db
    const db = await readDB();

    // 找到这个用户要删的这条
    const logIndex = db.logs.findIndex(log => 
      log.id === id && log.userId === ctx.state.user.userId
    );

    // 不符合上面那个就会返回给logindex赋值-1
    // 也就是没有，没有就报错
    if (logIndex === -1) {
      ctx.status = 404;
      ctx.body = { error: 'Log not found' };
      return;
    }
    
    // 删掉这个，长度1
    // 就是只删这一条
    db.logs.splice(logIndex, 1);
    // 写之
    await writeDB(db);

    //响应一个成功
    ctx.body = { message: 'Log deleted successfully' };

  } catch (error) {
    // 不中就打印和返回
    console.error('Delete log error:', error);
    ctx.status = 500;
    ctx.body = { error: 'Internal server error' };
  }
};