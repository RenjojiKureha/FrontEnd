<template>
    <h3>child</h3>
    <P>{{msg}}</P>
    <P>{{fullMsg}}</P>
    <p>{{ msg2 }}</p>
</template>

<script>
export default {
    // props:{
    //     msg:{
    //         type: String
    //     }
    // },
    inject:{
        msg:['msg','msg2']
    },
    data(){
        return {
            fullMsg: this.msg + '儿子的财产'
        }
    }
}
</script>