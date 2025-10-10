<script>
import child from './child.vue'
export default {
    data(){
        return {
            message: '动态数据',
        }
    },
    components:{
        child
    }
}
</script>

<template>
    <h3>parent</h3>
    <child title="parent数据" demo="测试" :pData="message"/>
</template>

<!-- 数据只能母级传子级，不能子级传母级，子级也不能传子级 -->