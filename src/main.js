// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Input from './components/input'
import FormItem from './components/form-item'
import Form from './components/form'
import Button from './components/button'

Vue.config.productionTip = false

Vue.component(Input.name, Input)
Vue.component(FormItem.name, FormItem)
Vue.component(Form.name, Form)
Vue.component(Button.name, Button)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
