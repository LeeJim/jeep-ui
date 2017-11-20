import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Button from '../pages/button'
import Input from '../pages/input'
import Form from '../pages/form'
import Radio from '../pages/radio'
import CheckBox from '../pages/checkbox'
import Toggle from '../pages/toggle'

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
  }, {
    path: '/radio',
    name: 'radio page',
    component: Radio
  }, {
    path: '/checkbox',
    name: 'checkbox page',
    component: CheckBox
  }, {
    path: '/toggle',
    name: 'toggle page',
    component: Toggle
  }]
})
