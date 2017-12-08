<template>
  <div
    class="j-form-item" 
    :style="itemStyle"
    :class="{
      'label-left': jForm.labelPosition === 'left',
      'is-required': inRequired,
      'is-error': validateError !== ''
    }">
    <div class="j-form-item__label" :style="labelStyle">
      <label v-if="label || $slots.label" :for="labelFor">
        <slot name="label">{{label}}</slot>
      </label>
    </div>
    <div class="j-form-item__content" :style="contentStyle">
      <slot></slot>
      <transition name="fade">
        <div
          v-if="showMessage && validateError"
          class="j-form-item__error">
          {{validateError}}
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import util from '@/utils/util'

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
        labelFor: '',
        inRequired: true
      }
    },

    methods: {

    },
    created() {
      if (this.prop) {
        const prop = this.prop
        const that = this
        this.jForm.errorData[prop] = ''
        this.jForm.formData[prop] = ''
        Object.defineProperty(this.jForm.errorData, prop, {
          set(newVal) {
            that.validateError = newVal.replace('[label]', that.label)
          }
        })
        if (this.required) {
          const rule = this.jForm.rules[prop]
          const ruleOfRequired = { required: true, message: this.jForm.errorTemplate }
          if (util.isEmpty(rule)) {
            this.jForm.rules[prop] = ruleOfRequired
          } else if (Array.isArray(rule)) {
            this.jForm.rules[prop].push(ruleOfRequired)
          } else if (typeof rule === 'object') {
            this.jForm.rules[prop] = [rule, ruleOfRequired]
          }
        }
      } else {
        this.inRequired = false
      }

      if (!this.required) {
        this.inRequired = false
        // this.jForm.rules[this.prop] = []
      }
    }
  }
</script>

<style lang="less">
  .j-form-item {
    margin: 0 auto 22px;
    line-height: 32px;

    .fade-enter-active, .fade-leave-active {
      transition: transform .3s
    }
    .fade-enter, .fade-leave-to {
      transform: scaleY(0)
    }

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
      padding-right: 12px;
      box-sizing: border-box;
    }

    .j-form-item__content {
      position: relative;
      float: left;
      text-align: left;
    }

    .j-form-item__error {
      position: absolute;
      top: 100%;
      left: 0;
      padding-left: 6px;
      padding-top: 4px;
      color: #9f3a38;
      text-align: left;
      font-size: 12px;
      line-height: 1;
    }
  }
</style>

