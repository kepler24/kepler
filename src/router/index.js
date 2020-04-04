import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Pics from '../views/Pics.vue'
import Docs from '../views/Docs.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/pics',
    name: 'pics',
    component: Pics
  },
  {
    path: '/docs',
    name: 'docs',
    component: Docs
  },
]

const router = new VueRouter({
  routes
})

export default router
