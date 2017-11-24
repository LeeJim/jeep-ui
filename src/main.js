// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Input from './components/input'
import FormItem from './components/form-item'
import Form from './components/form'
import Button from './components/button'

import Radio from './components/radio'
import RadioGroup from './components/radio-group'
import Checkbox from './components/checkbox'
import CheckboxGroup from './components/checkbox-group'
import Toggle from './components/toggle'
import Loading from './components/loading'

Vue.config.productionTip = false

Vue.component(Input.name, Input)
Vue.component(FormItem.name, FormItem)
Vue.component(Form.name, Form)
Vue.component(Button.name, Button)
Vue.component(Radio.name, Radio)
Vue.component(RadioGroup.name, RadioGroup)
Vue.component(Checkbox.name, Checkbox)
Vue.component(CheckboxGroup.name, CheckboxGroup)
Vue.component(Toggle.name, Toggle)
Vue.component(Loading.name, Loading)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
