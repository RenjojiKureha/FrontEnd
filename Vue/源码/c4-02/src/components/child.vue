<template>
    <h3>child</h3>
    <P>{{msg}}</P>
    <P>{{fullMsg}}</P>
</template>

<script>
export default {
    // props:{
    //     msg:{
    //         type: String
    //     }
    // },
    inject:{
        msg:['msg']
    },
    data(){
        return {
            fullMsg: this.msg + '儿子的财产'
        }
    }
}
</script>