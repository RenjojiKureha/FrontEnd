<template>
  <div>
    <v-date-picker v-model="date" class="cal"/>
  </div>
</template>

<script setup>
import { computed } from 'vue'


</script>

<style scoped>

div {
    width: 100%;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
    /* border: 5px solid #999; */
    box-sizing: border-box;
}

.cal {
    width: 100%;
    margin: 0 auto;
    border: none;
    box-shadow: none;
}

/* 优化日历组件的样式 */
.cal ::v-deep(.vc-container) {
    border: none; /* 去掉容器边框 */
    box-shadow: none; /* 去掉阴影 */
}

.cal ::v-deep(.vc-header) {
    padding: 8px 12px; /* 调整头部间距 */
}

.cal ::v-deep(.vc-weeks) {
    padding: 8px 12px; /* 调整周数区域间距 */
}

.cal ::v-deep(.vc-weekday) {
    padding: 8px 0; /* 调整星期标题间距 */
    font-weight: 500; /* 稍微加粗星期标题 */
}

.cal ::v-deep(.vc-day) {
    min-height: 32px; /* 设置日期单元格最小高度 */
    padding: 4px 0; /* 调整日期间距 */
}

.cal ::v-deep(.vc-day-content) {
    font-size: 14px; /* 调整日期字体大小 */
    width: 32px; /* 固定日期内容宽度 */
    height: 32px; /* 固定日期内容高度 */
    line-height: 32px; /* 垂直居中 */
}
</style>