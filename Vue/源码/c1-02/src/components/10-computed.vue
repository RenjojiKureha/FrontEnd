<script>

export default {
    data(){
        return{
            arr1:{
                name:"灵感菇",
                content:["咕咕", "嘎嘎", "咕哩刮叉"],
            }
        }
    },
    // 计算属性
    computed:{
        arr1Content(){
            return this.arr1.content.length > 0 ? 'yes' : 'no'
        }
    },
    // 放函数或者方式
    methods:{
        arr1Contents(){
            return this.arr1.content.length > 0 ? 'yes' : 'no'
        }
    }
}

</script>

<template>

    <h3>计算属性</h3>

    <p>{{ arr1.name }}</p>
    <!-- computed如果多次调用只会计算一次 -->
    <p>{{ arr1Content }}</p>
    <!-- 函数和其他方法调用几次就会计算几次 -->
    <p>{{ arr1Contents() }}</p>

</template>