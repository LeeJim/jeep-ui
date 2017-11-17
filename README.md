# jui
practical  UI for Vue.js

# form

label-position 标签文本的位置
total-options
error-template： default：请选择[prop]

## form-item

type： 数据类型 default：string
show-message：是否显示错误信息 default：true
error: 传入错误信息
required：是否必填 default： true
label：标签文本

常用场景就是快速搭建的时候，rule太繁琐。

默认required，默认trigger：blur，required信息：请选择[prop]

change\blur
message, rule