<template>
    <div class="log">
        <input type="time" class="clock" :value="logData.time" @input="onTimeChange">
        <input class="doing" type="text" :value="logData.doing" @input="onDoingChange">
        <div class="check">
            <input type="checkbox" :id="'checkbox-' + logData.id" :checked="logData.checked" @change="onCheckChange">
            <label :for="'checkbox-' + logData.id">{{ statusText }}</label>
        </div>
        <button @click="onDelete" class="delete-btn">删除</button>
        <!-- 删除可以再美化 -->
    </div>
</template>

<script>
export default {
    props: {
        logData: {
            type: Object,
            required: true
        }
    },
    computed: {
        statusText() {
            return this.logData.checked ? '已完成' : '未完成';
        }
    },
    methods: {
        // 发送更新时间
        onTimeChange(event) {
            this.$emit('update', { ...this.logData, time: event.target.value });
        },
        // 发送更新内容
        onDoingChange(event) {
            this.$emit('update', { ...this.logData, doing: event.target.value });
        },
        // 发送更新checked
        onCheckChange(event) {
            this.$emit('update', { ...this.logData, checked: event.target.checked });
        },
        onDelete() {
            this.$emit('delete', this.logData.id);
        }
    },
};
</script>

<style scoped>
.log {
    width: 100%;
    text-align: left;
    border: 1px solid #999;
    box-sizing: border-box;
    margin-top: 5px;
}
.check {
    width: 20%;
    float: right;
    border: 1px solid #999;
    box-sizing: border-box;
}
.clock {
    width: 18%;
    float: left;
    border: 1px solid #999;
    box-sizing: border-box;
}
.doing {
    width: 62%;
    float: center;
    /* display: inline-block;
    border: 1px solid #999; */
    box-sizing: border-box;
}
.delete-btn {
  background: #dc3545;
  color: white;
  border: none;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
}
</style>