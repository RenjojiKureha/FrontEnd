<script>

import item from './item.vue';

export default {
    components:{
        item
    }    
}

</script>

<style scoped>

.aside{
    float: right;
    width: 29%;
    height: 400px;
    border: 5px solid #999;
    box-sizing: border-box;
}
</style>

<template>

    <div class="aside">
        <h3>Aside</h3>
        <item/>
        <item/>
        <item/>
    </div>

</template>