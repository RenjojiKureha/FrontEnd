<template>
    
    <div class="logL">
        <button class="button1" @click="addListHandle">添加数据</button>
        <logs 
            v-for="log in sortedLogs" 
            :key="log._id || log.id"
            :log-data="log"
            @update="updateLog"
            @delete="deleteLog"
        />
    </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
import logs from './logs.vue';
import api from '../utils/api'

const API_URL = 'http://localhost:3000/logs'; // 定义 API 地址

// 辅助函数：将 Date 对象格式化为 'YYYY-MM-DD'
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');// 保证两位
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;// 拼起来

}

export default {
    components: {
        logs,
    },
    // app的selectedDate
    props: {
        selectedDate: {
            type: Date,
            required: true
        }
    },
    setup(props) {
        const logs = ref([])
        // 排序logs
        const sortedLogs = computed(() => {
        // 让dateStr等于被上面格式函数格式好的所选日期
        const dateStr = formatDate(props.selectedDate);
        return logs.value // 选择返回的logs组件
            .filter(log => log.date === dateStr) // .filter过滤：指针只留下所选那天的
            .sort((a, b) => a.time.localeCompare(b.time)); // .sort排序：按时间
      })

      // 获取所有日志
      const fetchLogs = async () => {
        try {
          // 等后端的logs拿过来
          const response = await api.get('/logs');
          // 把拿到的logs赋值给前端的logs
          logs.value = response.data;
        } catch (error) {
          console.error('Failed to fetch logs:', error);
        }
      }

      // 更新一个日志
      const updateLog = async (updatedLog) => {
        try {
          // 要改的id发给后端，调用后面这个
          await api.put(`/logs/${updatedLog.id}`, updatedLog);

          // 找到对应log 赋给index
          const index = logs.value.findIndex(log => log.id === updatedLog.id);

          // 对应log存在，则index不等于-1，用更新后的覆盖掉原来的
          if (index !== -1) {
            logs.value.splice(index, 1, updatedLog);
          }
        } catch (error) {
          console.error('Failed to update log:', error);
        }
      }

      // 删除日志
      const deleteLog = async (logId) => {
        try {
          // 把要删的id发给后端
          await api.delete(`/logs/${logId}`);

          // 过滤掉被删的log
          logs.value = logs.value.filter(log => log.id !== logId);
        } catch (error) {
          console.error('Failed to delete log:', error);
        }
      }

      // 添加一个新日志
      const addListHandle = async () => {

        // 先获取当前日期对象
        const now = new Date();

        // 格式化小时
        const hours = String(now.getHours()).padStart(2, '0');

        // 格式化分钟
        const minutes = String(now.getMinutes()).padStart(2, '0');

        // 拼起来赋给currentTime
        const currentTime = `${hours}:${minutes}`;
        
        // 新log初始化赋值
        const newLog = {
          date: formatDate(props.selectedDate),// 添加日期字段
          time: currentTime, 
          doing: '新任务...', 
          checked: false 
        };

        try {
          // 等待后端创建新log赋给response
          const response = await api.post('/logs', newLog);

          // 给前端的logs push新log
          logs.value.push(response.data);

        } catch (error) {
          console.error('Failed to create log:', error);
        }
      }

      // 在组件创建时，从服务器获取初始数据
      onMounted(() => {
        fetchLogs();
      })

      return {
        sortedLogs,
        updateLog,
        deleteLog,
        addListHandle
      }
    },       
}
</script>

<style scoped>
.logL {
    width: 100%;
    text-align: center;
    /* border: 5px solid #999; */
    box-sizing: border-box;
}
.button1 {
    width: 100%;
    height: 30px;
    text-align: center;
    /* border: 5px solid #999; */
    box-sizing: border-box;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: #4CAF50; /* 绿色背景 */
    color: white; /* 白色文字 */
    border: none; /* 去掉边框 */
    border-radius: 5px; /* 圆角按钮 */
    cursor: pointer; /* 鼠标悬停时显示为手型 */
}
/* 这button1的css是tab出来的，感觉很合适 */
</style>