<script>

export default {
    data(){
        return{
            flag:false, // true可见，false不可见
            type:"D",
        }
    }
}

</script>

<template>

    <h3>条件渲染</h3>

    <div v-if="flag">can u see me</div>
    <div v-else>now you only see me</div>

    <div v-if="type==='A'">A</div>
    <div v-else-if="type==='B'">B</div>
    <div v-else-if="type==='C'">C</div>
    <div v-else>Not A/B/C</div>

    <div v-show="flag">u also can see me</div>

    <!-- 改变次数少用v-if，改变次数多用v-show -->

</template>