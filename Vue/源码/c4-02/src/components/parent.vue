<template>
    <h3>parent</h3>
    <!-- <Child :msg="msg"/> -->
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
}
</script>