<template>
  <div class="j-input"
    :class="{
      'is-disabled': disabled,
      'has-left-icon': loading || prefixIcon,
      'has-right-icon': suffixIcon
    }">
    <input 
      :placeholder="placeholder" 
      :name="name" 
      :max="max" 
      :min="min" 
      :step="step" 
      :autofocus="autofocus" 
      :form="form" 
      :autoComplete="autoComplete" 
      :readonly="readonly" 
      :disabled="disabled"
      @blur="handleBlur" 
      @change="handleChange" 
      @input="handleInput" 
      :value="jForm && jForm.formData && jForm.formData[jFormItem.prop] || value">
    <i v-if="loading" class="fa-li fa fa-spinner fa-spin left"></i>
    <i v-else-if="prefixIcon" :class="`fa-li fa fa-${prefixIcon} left`"></i>
    <i v-else-if="suffixIcon" :class="`fa-li fa fa-${suffixIcon} right`"></i>
  </div>
</template>

<script>
  import formMixin from '@/utils/mixins/form'
  
  export default {
    name: 'j-input',

    data() {
      return {
      }
    },

    inject: {
      jForm: {
        default: null
      },
      jFormItem: {
        default: null
      }
    },

    mixins: [formMixin],

    props: {
      type: {
        type: String,
        default: 'text',
        validator(type) {
          return ['password', 'tel', 'number', 'email', 'date', 'text'].indexOf(type) > -1
        }
      },
      placeholder: String, // native
      name: String, // native
      max: Number, // native
      min: Number, // native
      step: Number, // native
      autofocus: Boolean, // native
      form: String, // native
      readonly: Boolean, // native
      disabled: Boolean, // native
      autoComplete: Boolean, // native
      loading: Boolean,
      prefixIcon: String,
      suffixIcon: String,
      value: [String, Number],
      blur: Function,
      focus: Function,
      change: Function
    },

    methods: {
      handleInput(event) {
        const value = event.target.value
        this.setFormValue(value)
        this.clearError()
        this.$emit('value', event)
      },
      handleBlur(event) {
        this.$emit('blur', event)
      },
      handleChange(event) {
        const value = event.target.value
        this.clearError()
        this.$emit('change', value)
      }
    },

    created() {

    }
  }
</script>

<style lang="less">
  @import "../../assets/less/font-awesome/font-awesome.less";
  @fontColor: rgba(0,0,0,.87);
  .j-input {
    position: relative;
    font-weight: 400;
    font-style: normal;
    display: inline-flex;
    color: @fontColor;
    font-size: 1em;

    &.is-disabled {
      opacity: .45;
    }

    > .fa {
      top: 50%;
      margin-top: -.5em;
      color: #999;

      &.left {
        left: 0;
      }

      &.right {
        right: 0;
        left: unset;
      }
    }
    
    > input {
      margin: 0;
      max-width: 100%;
      flex: 1 0 auto;
      outline: 0;
      -webkit-tap-highlight-color: rgba(255,255,255,0);
      text-align: left;
      line-height: 14px;
      font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
      padding: 8px 12px;
      background: #fff;
      border: 1px solid rgba(34,36,38,.15);
      color: @fontColor;
      border-radius: .28571429rem;
      transition: box-shadow .1s ease,border-color .1s ease;
      box-shadow: none;

      .is-error & {
        background-color: #fff6f6;
        border-color: #e0b4b4;
        color: #9f3a38;
        box-shadow: none;
      }

      .has-left-icon& {
        padding-left: 3em;
      }

      .has-right-icon& {
        padding-right: 3em;
      }

      &:focus {
        border-color: #85b7d9;
        background: #fff;
        color: rgba(0,0,0,.8);
        box-shadow: none;
      }
    }
  }
</style>
