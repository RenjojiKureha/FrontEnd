<template>
    <h3>组合式api</h3>
    <p>{{ msg }}</p>
    <p>{{ userInfo.name }}</p>
</template>

<script>
import { ref, reactive } from 'vue'
// 优势：组合式和选项式可以共存
// 但不建议混用
export default {
    name: 'CompositionCpnt',
    data() {
        return {
        }
    },
    // 组合式api的关键字
    /**
     * ref:基本类型的响应式数据： string number boolean null undefined
     * reactive:复杂类型的响应式数据： object array
     */
    setup() {
        const msg = ref('组合式api 绑定数据');
        const userInfo = reactive({
            name: '张三',
            age: 18
        })
        // 外部想访问，必须return出去才可以
        return {
            msg,
            userInfo
        }
    }
}
</script>