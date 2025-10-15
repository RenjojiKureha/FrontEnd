<template>
    <h3>选项式api</h3>
    <p>{{ count }}</p>
    <button @click="add">增加</button>
</template>

<script>
export default{
    data(){
        return {
            count:0
        }
    },
    methods:{
        add(){
            this.count++
        }
    },
    watch:{
        count(newVal,oldVal){
            console.log('newVal',newVal);
            console.log('oldVal',oldVal);
        }
    },
}
</script>