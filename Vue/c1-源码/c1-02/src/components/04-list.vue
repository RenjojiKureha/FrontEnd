<script>

export default {
    data(){
        return{
            names:["灵感菇","凑企鹅","Doro狗"]
        }
    }
}

</script>

<template>

    <h3>列表渲染</h3>

    <p v-for="item in names">{{ item }}</p>
    
</template>