# jui
practical  UI for Vue.js

# 为什么做这个UI

通常，开发Vue.js的项目时，UI框架首选是 饿了么的Element UI。

其中，表单这一块经常用，而Element UI的表单无比难用，特别繁琐。这就是出发点。

# 项目规划

首先，form相关组件。包含form, form-item, input, button

然后，完善form相关的组件。包含radio, checkbox, select switch, DatePicker

最后就是其他类的组件了。

# 组件

### form

|参数|说明|类型|可选值|默认值|
|--|--|--|--|--|
|label-position|标签文本的位置|string|left,right|right|
|error-template|默认的错误模板|string|-|[prop]不能为空

### form-item

|参数|说明|类型|可选值|默认值|
|--|--|--|--|--|
|type|数据类型|string|-|text|
|show-message|是否显示错误信息|boolean|true,false|true|
|error|传入错误信息|string|-|-|
|required|是否必填|boolean|true,false|true|
|label|标签文本|string|-|-|

### button

|参数|说明|类型|可选值|默认值|
|--|--|--|--|--|
|type|类型|string|-|text|
|plain|朴素风格|boolean|true,false|false|
|disable|不可点击状态|boolean|true,false|false|
|loading|加载状态|boolean|true,false|false|

### input

|参数|说明|类型|可选值|默认值|
|--|--|--|--|--|
|type|类型|string|-|text|
|readonly|是否只读|boolean|true,false|false|
|placeholder|原生属性|string|-|-|
