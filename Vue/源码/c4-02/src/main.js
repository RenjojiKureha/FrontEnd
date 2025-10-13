import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')
app.provide('msg','全局数据')
