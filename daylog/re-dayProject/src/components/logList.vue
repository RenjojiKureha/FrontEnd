<template>
    
    <div class="logL">
        <button class="button1" @click="addListHandle">添加数据</button>
        <logs 
            v-for="item in logData" 
            :key="item.id"
            :log-data="item"
            @update="handleLogUpdate"
            />
    </div>
</template>

<script setup>
import logs from './logs.vue'
import { ref } from 'vue';

const logData = ref([
    {id:1, time: '12:00', doing: '吃午饭', checked: false},
    {id:2, time: '10:00', doing: '洗漱', checked: true}
])

function handleLogUpdate(updatedLog) {
    const index = logData.value.findIndex(log => log.id === updatedLog.id);
    if (index !== -1) {
        logData.value[index] = updatedLog;
    }
}

// 辅助函数：将 Date 对象格式化为 'YYYY-MM-DD'
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;

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