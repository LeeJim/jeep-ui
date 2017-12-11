# jeep-ui

[🇨🇳 中文文档](https://github.com/LeeJim/jeep-ui/blob/master/README-CN.md)

[![npm](https://img.shields.io/npm/v/jeep-ui.svg)](https://www.npmjs.com/package/jeep-ui) [![npm](https://img.shields.io/npm/dm/jeep-ui.svg)](https://www.npmjs.com/package/jeep-ui)

Practical UI for Vue.js

Inspired by [Semantic-ui](http://semantic-ui.com/) and [Element-ui](http://element.eleme.io/)

![image](http://7xnh42.com1.z0.glb.clouddn.com/suv.png?imageMogr2/thumbnail/640x200>/blur/1x0/quality/75|imageslim)

## why do it?

Usually, the [Element UI](http://element.eleme.io/) will be my first choice to build a Vue.js project.

Unfortunately, the Element's form is not easy to use, and the form is too frequently to use.

So, there is jeep-ui. Hope robust as jeep.

For convenience, use the same form validator as Element, called [async-validator](https://github.com/yiminghe/async-validator).

## Install

```
npm install jeep-ui
```

## Quick start

### Import all components

```js
import Vue from 'vue'
import JeepUI from 'jeep-ui'

Vue.use(JeepUI)
```

### Manually import

```js
import { Button } from 'jeep-ui'

Vue.component(Button.name, Button)
```

## Plan

Stage1: (2017.11.22 Done)

- Button
- Input
- Radio
- Checkbox
- Toggle
- Form

Stage2: (2017.12.6 Done)

- DropDown
- DatePicker
- Loading

Stage3: 

- Upload
- Modal

(...continue)

## Usage

Part of template：

```html
<j-form :formData="data" :errorData="error" ref="form" :rules="rules">

  <j-form-item label="username" prop="username">
    <j-input></j-input>
  </j-form-item>
  
  <j-form-item label="password" prop="password">
    <j-input type="password"></j-input>
  </j-form-item>
  
  <j-form-item>
    <j-button @click="submit">submit</j-button>
  </j-form-item>
  
</j-form>
```

Part of JavaScript：

```js
export default {
  data() {
    return {
      data: {},
      rules: {},
      error: {}
    }
  },
  methods: {
    submit() {
      this.$refs.form.validate((data) => {
        console.log(data)
      })
    }
  }
}
```

## Browser Support

Modern browsers and Internet Explorer 9+(no test).

## Components

### Form

|Attribute|Description|Type|Accepted values|Default|
|--|--|--|--|--|
|label-position|position of label|string|left,right|right|
|error-template|template of error message|string|-|[prop] is required
|formData|the entire data of form|object|-|-|
|rules|validation rules of form ([async-validator](https://github.com/yiminghe/async-validator))|object|-|-|
|errorData|message of error|object|-|-|

### FormItem
 
|Attribute|Description|Type|Accepted values|Default|
|--|--|--|--|--|
|prop|a key of this item|string|-|-|
|label|label|string|-|-|
|required|whether the field is required or not|boolean|true,false|true|
|show-message|whether the error message is show or not|boolean|true,false|true|
|labelWidth|width of label|string|-|80px|
|contentWidth|width of content|string|-|160px|

### Button

|Attribute|Description|Type|Accepted values|Default|
|--|--|--|--|--|
|type|button type|string|-|text|
|size|size|string|large,small,default|default|
|shape|shapre|string|plain,dash,quare,circle|-|
|disable| disable the button|boolean|true,false|false|
|loading|determine whether it's loading|boolean|true,false|false|
|nativeType|same as native button's `type`|string|-|button|

### Input

|Attribute|Description|Type|Accepted values|Default|
|--|--|--|--|--|
|type|input type|string|-|text|
|value|input value|string／number|-|-|
|disabled| disable the input|boolean|true,false|false|
|loading|determine whether it's loading|boolean|true,false|false|
|prefixIcon|the prefix icon|string|-|-|
|suffixIcon|the suffix icon|string|-|-|
|readonly|same as native input's `readonly`|boolean|true,false|false|
|placeholder|same as native input's `placeholder`|string|-|-|
|name|same as native input's `name`|string|-|-|
|max|same as native input's `max`|string|-|-|
|min|same as native input's `min`|string|-|-|
|step|same as native input's `step`|string|-|-|
|autofocus|same as native input's `autofocus`|string|-|-|
|form|same as native input's `form`|string|-|-|
|autoComplete|same as native input's `autoComplete`|string|-|-|
|focus|triggers when Input focus|function|-|-|
|blur|triggers when Input blurs|function|-|-|
|change|triggers when Input value change|function|-|-|

### Radio

|Attribute|Description|Type|Accepted values|Default|
|--|--|--|--|--|
|name|same as native radio's `name`|string|-|-|
|readonly|same as native radio's `readonly`|boolean|true,false|false|
|checked|same as native radio's `checked`|boolean|true,false|false|

### RadioGroup

|Attribute|Description|Type|Accepted values|Default|
|--|--|--|--|--|
|options|options|array|-|-|
|value|radio value|string／number|-|-|

### Checkbox

|Attribute|Description|Type|Accepted values|Default|
|--|--|--|--|--|
|name|same as native checkbox's `name`|string|-|-|
|readonly|same as native checkbox's `readonly`|boolean|true,false|false|
|checked|same as native checkbox's `checked`|boolean|true,false|false|

### CheckboxGroup

|Attribute|Description|Type|Accepted values|Default|
|--|--|--|--|--|
|options|options|array|-|-|
|value|checkbox value|string／number|-|-|

### Toggle

|Attribute|Description|Type|Accepted values|Default|
|--|--|--|--|--|
|name|input name of Toggle|string|-|-|
|checked|same as native toggle's `checked`|boolean|true,false|false|

### Dropdown

|Attribute|Description|Type|Accepted values|Default|
|--|--|--|--|--|
|name|input name of Dropdown|string|-|-|
|options|options|array|-|-|
|defaultText|default text|string|-|select|

### Loading

|Attribute|Description|Type|Accepted values|Default|
|--|--|--|--|--|
|type|icon type|string|rotate-plane、sk-circle、sk-fading-circle、double-bounce、rect、cube、bounce|rotate-plane|
|loading|determine whether it's loading|boolean|true,false|false|
|mask|whether the mask is show or not|boolean|true,false|true|
|noText|whether the text is show or not|boolean|true,false|false|
|text|text|string|-|loading...|

### DatePicker

|Attribute|Description|Type|Accepted values|Default|
|--|--|--|--|--|
|format|format date string|string|-|YYYY-DD-MM|
|defaultText|similar to input's placeholder|string|-|choose a date|

## LICENSE

MIT
