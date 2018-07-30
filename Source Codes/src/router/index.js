import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/main/Home'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/TodoList',
      name: 'Home',
      component: Home
    },
    {
      path: '/TodoList/about',
      name: 'About',
      component: About
    }
  ],
  mode: 'history',
  base: __dirname
})
