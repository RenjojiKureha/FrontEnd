<script>

export default {
    data(){
        return{
            count:0,
        }
    },
    methods:{
        addCount(msg){
            console.log(msg)
            this.count++
        }
    }
}

</script>

<template>

    <h3>内联事件处理器</h3>

    <button @click="addCount('hello')">add</button>
    <!-- <button v-on:click="count++">add</button> -->
    <p>{{ count }}</p>

</template>