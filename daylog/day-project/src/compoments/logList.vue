<template>
    
    <div class="logL">
        <button class="button1" @click="addListHandle">添加数据</button>
        <logs 
            v-for="log in sortedLogs" 
            :key="log.id"
            :log-data="log"
            @update="updateLog"
        />
    </div>
</template>

<script>
import logs from './logs.vue';

const API_URL = 'http://localhost:3000/logs'; // 定义 API 地址

// 辅助函数：将 Date 对象格式化为 'YYYY-MM-DD'
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;

}

export default {
    components: {
        logs,
    },
    // 1. 接收来自父组件的 selectedDate
    props: {
        selectedDate: {
            type: Date,
            required: true
        }
    },
    data() {
        return {
        // 将所有 log 数据集中管理
        logs: [
            // { id: 0, time: '00:00', doing: 'doing', checked: false }, 
        ],
        // nextLogId: 1,
        }
    },
    computed: {
        // 创建一个计算属性来对 logs 数组进行排序
        sortedLogs() {
        const dateStr = formatDate(this.selectedDate);
            return this.logs
                .filter(log => log.date === dateStr) // 只保留匹配日期的日志
                .sort((a, b) => a.time.localeCompare(b.time)); // 按时间排序
        }
    },
    methods: {
        // 获取所有日志
        async fetchLogs() {
            const response = await fetch(API_URL);
            this.logs = await response.json();
        },
        // 更新一个日志
        async updateLog(updatedLog) {
            await fetch(`${API_URL}/${updatedLog.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedLog)
            });
            // 更新本地数据以立即响应
            const index = this.logs.findIndex(log => log.id === updatedLog.id);
            if (index !== -1) {
                this.logs.splice(index, 1, updatedLog);
            }
        },
        // 添加一个新日志
        async addListHandle() {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const currentTime = `${hours}:${minutes}`;
            
            const newLog = {
                date: formatDate(this.selectedDate), // 添加日期字段
                time: currentTime, 
                doing: '新任务...', 
                checked: false 
            };

            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newLog)
            });
            const addedLog = await response.json(); // 获取包含新 id 的日志
            this.logs.push(addedLog); // 将服务器返回的完整对象添加到数组
        },
    },
    // 在组件创建时，从服务器获取初始数据
    created() {
        this.fetchLogs();
    }
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