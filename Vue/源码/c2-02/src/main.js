import { createApp } from 'vue'
import App from './App.vue'
import Header from './components/Header.vue'

const app = createApp(App)

// 在这中间写组件的注册
// 全局注册组件
app.component('Header', Header)

app.mount('#app')