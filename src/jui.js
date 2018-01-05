import Input from './components/input'
import FormItem from './components/form-item'
import Form from './components/form'
import Button from './components/button'

import Radio from './components/radio'
import RadioGroup from './components/radio-group'
import Checkbox from './components/checkbox'
import CheckboxGroup from './components/checkbox-group'
import Toggle from './components/toggle'

const install = (Vue) => {
  if (install.installed) return

  Vue.component(Input.name, Input)
  Vue.component(FormItem.name, FormItem)
  Vue.component(Form.name, Form)
  Vue.component(Button.name, Button)
  Vue.component(Radio.name, Radio)
  Vue.component(RadioGroup.name, RadioGroup)
  Vue.component(Checkbox.name, Checkbox)
  Vue.component(CheckboxGroup.name, CheckboxGroup)
  Vue.component(Toggle.name, Toggle)
}

module.exports = {
  install,
  Input,
  FormItem,
  Form,
  Button,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Toggle
}
