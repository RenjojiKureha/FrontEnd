<script>

export default {
    data(){
        return{
            message1:"",
            checked: false,
            message2:"",
        }
    },
    methods:{
        updateHandle(){
            this.message = "world";
        }
    },
}

</script>

<template>

    <h3>表单输入绑定</h3>

    <form action="">
        <!-- 实时更新 -->
        <input type="text" v-model="message1">
        <p>{{ message1 }}</p>
        <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">{{ checked }}</label><br>

        <!-- 改变后才会更新 -->
        <input type="text" v-model.lazy="message2">
        <p>{{ message2 }}</p>
    </form>

</template>