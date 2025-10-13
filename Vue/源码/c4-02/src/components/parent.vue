<template>
    <h3>parent</h3>
    <!-- <Child :msg="msg"/> -->
     <p>{{ msg2 }}</p>
    <child></child>
</template>

<script>
import Child from './child.vue'
export default {
    components:{
        Child
    },
    // props:{
    //     msg:{
    //         type: String
    //     }
    // }
    inject:['msg','msg2']
}
</script>