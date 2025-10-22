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
        const response = await api.get('/logs');
        logs.value = response.data;
      } catch (error) {
        console.error('Failed to fetch logs:', error);
      }
    }

    // 更新一个日志
    const updateLog = async (updatedLog) => {
      try {
        await api.put(`/logs/${updatedLog.id}`, updatedLog);
        // 更新本地数据以立即响应
        const index = logs.value.findIndex(log => log.id === updatedLog.id);
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
        await api.delete(`/logs/${logId}`);
        logs.value = logs.value.filter(log => log.id !== logId);
      } catch (error) {
        console.error('Failed to delete log:', error);
      }
    }

    // 添加一个新日志
    const addListHandle = async () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const currentTime = `${hours}:${minutes}`;
      
      const newLog = {
        date: formatDate(props.selectedDate),// 添加日期字段
        time: currentTime, 
        doing: '新任务...', 
        checked: false 
      };

      try {
        // 获取包含新 id 的日志
        const response = await api.post('/logs', newLog); 
        // 将服务器返回的完整对象添加到数组
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