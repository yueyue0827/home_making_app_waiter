import Vue from 'vue'
import VueRouter from 'vue-router'
import Manager from '../pages/manager/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Manager,
    children:[{
      path:'home',
      name:'home',
      component: () => import('../pages/manager/Home.vue'),
    },{
      path:'order',
      name:'order',
      component: () => import('../pages/manager/Order.vue'),
    },{
      path:'user',
      name:'user',
      component: () => import('../pages/manager/User.vue'),
    }]
  },{
    path:'/login',
    name:'login',
    component: () => import('../pages/Login.vue')
  }]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
