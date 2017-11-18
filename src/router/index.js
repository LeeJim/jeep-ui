import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Button from '../pages/button'
import Input from '../pages/input'
import Form from '../pages/form'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }, {
    path: '/button',
    name: 'button page',
    component: Button
  }, {
    path: '/form',
    name: 'form page',
    component: Form
  }, {
    path: '/input',
    name: 'input page',
    component: Input
  }]
})
