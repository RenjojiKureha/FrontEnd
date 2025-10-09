<script>

export default {
    data(){
        return{
            names:["灵感菇","凑企鹅","Doro狗"],
        }
    },
    methods:{
        getNameHandler(name, e){
            console.log(name, e)
        }
    }
}

</script>

<template>

    <h3>事件传参</h3>

    <p @click="getNameHandler(item, $event)" v-for="(item, index) in names" :key="index">{{ item }}</p>

</template>