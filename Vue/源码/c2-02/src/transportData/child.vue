<script>
export default {
    data(){
        return {
            
        }
    },
    props:['title', 'demo', 'pData']
}
</script>

<template>
    <h3>child</h3>
    <p>{{ title }}</p>
    <p>{{ demo }}</p>
    <p>{{ pData }}</p>
</template>