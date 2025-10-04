<script>

export default{
    data(){
        return{
            dynamicClass:"appclass",
            dynamicId:"appID",
            dynamicTitle:null,  // null和undefined会使属性被移出
            inButtonDisabled:true,  // 为true不可点击,为false可点
            objectOfAttr:{
                class:"appclass",
                id:"appID",  
            }
        }
    }
}

</script>

<template>

    <div class="{{ dynamicClass }}">双大括号不能用于属性赋值</div>

    <div v-bind:class="dynamicClass" v-bind:id="dynamicId" v-bind:title="dynamicTitle">要使用v-bind:属性</div>

    <div :class="dynamicClass" :id="dynamicId" :title="dynamicTitle">也可以不加v-bind, 简写直接:属性</div>

    <button :disabled="inButtonDisabled">这是一个按钮</button>

    <div v-bind="objectOfAttr">可以一次性绑定多个属性</div>

</template>

<style>

.appclass{
    color: rebeccapurple;
    font-size: 30px;
}

</style>