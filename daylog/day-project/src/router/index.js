import { createRouter, createWebHistory } from 'vue-router'
import login from '@/compoments/login.vue'
import register from '@/compoments/Register.vue'
import MainApp from '../App.vue'

const routes = [
  { path: '/login', component: login },
  { path: '/register', component: register },
  { path: '/', component: MainApp, meta: { requiresAuth: true } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  
  if (to.meta.requiresAuth && !token) {
    next('/login')
  } else {
    next()
  }
})

export default router