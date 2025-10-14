import { createApp } from 'vue'
import App from './App.vue'

// app:vue的实例对象
// 在一个vue项目中，有且只有一个vue的实例对象
const app = createApp(App)

// 挂载到容器当中
app.mount('#app')
app.provide('msg','全局数据')
