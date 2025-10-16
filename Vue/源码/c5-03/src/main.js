import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// 全局自定义指令
app.directive("blue",{
    mounted(element){
        element.style.color = "blue"
    }
})

app.mount('#app')
