import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import List from '../components/List.vue'
import Add from '../components/Add.vue'
import Collect from '../components/Collect.vue'
import Detail from '../components/Detail.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/List',
      name: 'List',
      component: List
    },
    {
      path: '/Collect',
      name: 'Collect',
      component: Collect
    },
    {
      path: '/Add',
      name: 'Add',
      component: Add
    },
    {
      path: '/Detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
