import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('views/home/Home.vue')
const Cart = () => import('views/cart/Cart.vue')
const Category = () => import('views/category/Category.vue')
const Profile = () => import('views/profile/Profile.vue')

//1.安装插件
// Vue.use(VueRouter)
// 2.创建路由对象
const routes = [
  { path: '', redirect: '/Home' },
  { path: '/Home', component: Home },
  { path: '/Cart', component: Cart },
  { path: '/Category', component: Category },
  { path: '/Profile', component: Profile },
  
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
// 3.导出路由
export default router