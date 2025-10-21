<template>
    <div class="log">
        <input class="clock" type="time" :value="props.logData.time">
        <input class="doing" type="text" :value="props.logData.doing">
        <div class="check-area">
            <input type="checkbox" 
                :id="'checkbox-'+ props.logData.id" 
                :checked="props.logData.checked" 
                @change="emitUpdate('checked', $event.target.checked)">
                <label :for="'checkbox-' + props.logData.id"></label>
        </div>
    </div> 
</template>

<script setup>

import { ref, watch,  } from 'vue';

const props = defineProps({
    logData: {
        type: Object,
        required: true,
        default: () => ({ id: 0, time: '00:00', doing: 'nothing', checked: false })
    }
});

const emit = defineEmits(['update']);

function emitUpdate(key, value) {
    emit('update', { ...props.logData, [key]: value });
}

</script>

<style scoped>
/* --- 整体容器 --- */
.log {
    display: flex; /* 使用 Flexbox 布局 */
    align-items: center; /* 垂直居中对齐所有子项 */
    width: 100%;
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 8px; /* 圆角 */
    margin-top: 10px;
    padding: 8px 12px; /* 增加内边距 */
    box-sizing: border-box;
    gap: 10px; /* 子元素之间的间距 */
}

/* --- 输入框通用样式 (时间和内容) --- */
.clock, .doing {
    border: none; /* 移除边框 */
    background-color: transparent; /* 透明背景 */
    /* font-size: 16px; */
    padding: 5px;
    outline: none; /* 移除点击时的轮廓 */
    color: #333;
}

.clock {
    width: 20%;
    font-family: 'Courier New', Courier, monospace; /* 等宽字体更适合显示时间 */
}

.doing {
    width: 55%;
    flex-grow: 1; /* 占据剩余空间 */
}

/* --- 右侧区域 --- */
.check-area {
    display: flex;
    align-items: center;
    justify-content: flex-end; /* 内容靠右对齐 */
    gap: 10px;
}

/* --- 美化 Checkbox 为开关样式 --- */
/* 隐藏原始的 checkbox */
.check-area input[type="checkbox"] {
    display: none; 
}

/* 创建开关的轨道 */
.check-area label {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 22px;
    background-color: #ccc;
    border-radius: 22px;
    cursor: pointer;
    transition: background-color 0.3s;
    /* 移除文字，因为我们用它来做开关 */
    color: transparent;
    font-size: 0;
}

/* 创建开关的滑块 */
.check-area label::after {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: white;
    top: 2px;
    left: 2px;
    transition: transform 0.3s;
}

/* --- 动态样式：当任务完成时 (checkbox 被选中) --- */

/* 1. 改变开关的背景色 */
.check-area input[type="checkbox"]:checked + label {
    background-color: #27ae60; /* 绿色 */
}

/* 2. 移动开关的滑块 */
.check-area input[type="checkbox"]:checked + label::after {
    transform: translateX(18px); /* 向右移动 */
}

/* 3. 改变整个卡片的样式 (使用 :has 选择器) */
.log:has(.check-area input:checked) {
    background-color: #f7f7f7;
    border-color: #dcdcdc;
}

/* 4. 给任务内容添加删除线 */
.log:has(.check-area input:checked) .doing {
    text-decoration: line-through; /* 添加删除线 */
    color: #999;
}
</style>