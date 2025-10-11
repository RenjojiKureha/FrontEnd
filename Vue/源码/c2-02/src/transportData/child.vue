<script>
export default {
    data(){
        return {
            
        }
    },
    props:['title', 'demo', 'pData', 'age', 'names', 'userInfo']
}
</script>

<template>
    <h3>child</h3>
    <p>{{ title }}</p>
    <p>{{ demo }}</p>
    <p>{{ pData }}</p>
    <p>{{ age }}</p>
    <ul>
        <li v-for="(item, index) in names" :key="index">{{ item }}</li>
    </ul>
    <p>{{ userInfo.name }}</p>
    <p>{{ userInfo.age }}</p>
</template>