<template>
    <h3>组合式api-简约写法</h3>
    <p>{{ msg }}</p>
    <p>{{ userInfo.name }}</p>
    <p>{{ reverseMsg }}</p>
    <p>{{ demo }}</p>
</template>

<script setup>
// 只能是组合式

// 为什么每次使用到一个功能都需要引入？
// vue3的优势：在打包的时候，vue2所有的功能都会打包，vue3只把使用到的功能打包
// vue3的打包会让包体积更小
import { ref, reactive, computed} from 'vue'
import { myDemo } from '../utils/computedUtils.js'

const msg = ref('组合式api 绑定数据-简约写法')
const userInfo = reactive({
    name: '张三',
    age: 18
})

const reverseMsg = computed(()=>{
    // 注意：访问ref类型的值需要加.value
    return msg.value.split("").reverse().join("")
})

// const demo = computed(()=>{
//    return msg.value+"---myDemo"
// })
const demo = myDemo(msg)

</script>