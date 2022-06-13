import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home'
import City from '../views/city/City'
import Detail from '../views/detail/Detail'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
// 修改 原型对象中的 push 方法
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/city',
    name: 'City',
    component: City
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
