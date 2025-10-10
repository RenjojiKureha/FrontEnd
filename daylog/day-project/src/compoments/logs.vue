<template>
    <div class="log">
        <input type="time" class="clock" :value="logData.time" @input="onTimeChange">
        <input class="doing" type="text" :value="logData.doing" @input="onDoingChange">
        <div class="check">
            <input type="checkbox" :id="'checkbox-' + logData.id" :checked="logData.checked" @change="onCheckChange">
            <label :for="'checkbox-' + logData.id">{{ statusText }}</label>
        </div>
        <!-- <p>{{ message }}</p> -->
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
    // 4. 添加 computed 选项
    computed: {
        // 这个计算属性会根据 logData.checked 的变化自动更新
        statusText() {
            return this.logData.checked ? '已完成' : '未完成';
        }
    },
    methods: {
        // 当时间变化时，发出 update 事件
        onTimeChange(event) {
            this.$emit('update', { ...this.logData, time: event.target.value });
        },
        // 当内容变化时，发出 update 事件
        onDoingChange(event) {
            this.$emit('update', { ...this.logData, doing: event.target.value });
        },
        // 3. 当复选框状态变化时，发出 update 事件
        onCheckChange(event) {
            // 将包含新 checked 值的完整 log 对象发送给父组件
            this.$emit('update', { ...this.logData, checked: event.target.checked });
        },
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
</style>