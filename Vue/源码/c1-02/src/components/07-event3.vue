<script>

export default {
    data(){
        return{
            count:0,
        }
    },
    methods:{
        // event对象
        addCount(e){
            console.log(e)
            // vue中的event对象，就是原生js的event对象
            e.target.innerHTML = "Add" + this.count
            this.count++
        }
    }
}

</script>

<template>

    <h3>内联事件处理器</h3>

    <button @click="addCount">add</button>
    <!-- <button v-on:click="count++">add</button> -->
    <p>{{ count }}</p>

</template>