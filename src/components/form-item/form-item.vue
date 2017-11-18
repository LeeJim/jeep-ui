<template>
  <div
    class="j-form-item" 
    :style="itemStyle"
    :class="{
      'label-left': jForm.labelPosition === 'left',
      'is-required': required,
      'is-error': validateError !== ''
    }">
    <div class="j-form-item__label" :style="labelStyle">
      <label v-if="label || $slots.label" :for="labelFor">
        <slot name="label">{{label}}</slot>
      </label>
    </div>
    <div class="j-form-item__content" :style="contentStyle">
      <slot></slot>
      <div
        v-if="showMessage && validateError"
        class="j-form-item__error">
        {{validateError}}
      </div>
    </div>
  </div>
</template>

<script>
export default {

  name: 'j-form-item',

  provide() {
    return {
      jFormItem: this
    }
  },

  inject: {
    jForm: {
      default: null
    }
  },

  props: {
    label: String,
    prop: String,
    required: {
      type: Boolean,
      default: true
    },
    showMessage: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'string'
    },
    labelWidth: {
      type: String,
      default: '80px'
    },
    contentWidth: {
      type: String,
      default: '160px'
    }
  },

  computed: {
    itemStyle() {
      const ret = {}

      ret.width = `${parseInt(this.labelWidth, 10) + parseInt(this.contentWidth, 10)}px`
      return ret
    },
    labelStyle() {
      const ret = {}
      const labelWidth = this.labelWidth || this.jForm.labelWidth

      if (labelWidth) {
        ret.width = labelWidth
      }
      return ret
    },
    contentStyle() {
      const ret = {}
      const contentWidth = this.contentWidth || this.jForm.contentWidth

      if (contentWidth) {
        ret.width = contentWidth
      }
      return ret
    }
  },

  data() {
    return {
      validateError: '',
      labelFor: ''
    }
  },

  methods: {

  },

  created() {
    if (this.prop) {
      const that = this
      this.jForm.errorData[this.prop] = ''
      this.jForm.formData[this.prop] = ''
      Object.defineProperty(this.jForm.errorData, this.prop, {
        set(newVal) {
          that.validateError = newVal.replace('[label]', that.label)
        }
      })
    }
    if (!this.required) {
      this.jForm.rules[this.prop] = []
    }
    //  else {
    //   this.required = false
    // }
  }
}
</script>

<style lang="less">
  .j-form-item {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 22px;

    &:before, &:after {
      content: "";
      display: table;
      clear: both;
    }

    &.label-left .j-form-item__label {
      text-align: left;
    }

    &.is-required .j-form-item__label {
      &:before {
        content: "*";
        color: #9f3a38;
      }
    }

    .j-form-item__label {
      float: left;
      width: 50px;
      text-align: right;
      vertical-align: middle;
      font-size: 14px;
      color: #5a5e66;
      line-height: 32px;
      padding-right: 12px;
      box-sizing: border-box;
    }

    .j-form-item__content {
      float: left;
    }

    .j-form-item__error {
      margin-top: 4px;
      color: #9f3a38;
      text-align: left;
      font-size: 12px;;
    }
  }
</style>

