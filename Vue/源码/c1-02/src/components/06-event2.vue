<script>

export default {
    data(){
        return{
            count:0,
        }
    },
    methods:{// 所有的方法都放在这里
        addcount(){
            console.log("点击了");
            //读取到data里面的数据的方案：this.count
            console.log(this.count);
            this.count++
        }
    }
}

</script>

<template>

    <h3>内联事件处理器</h3>

    <button @click="addcount">add</button>
    <!-- <button v-on:click="count++">add</button> -->
    <p>{{ count }}</p>

</template>