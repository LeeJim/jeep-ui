<template>
  <div class="j-input">
    <input 
      :placeholder="placeholder" 
      :readonly="readonly" 
      @input="handleInput" 
      :value="jForm && jForm.formData && jForm.formData[jFormItem.prop] || value">
    <span></span>
  </div>
</template>

<script>
export default {
  name: 'j-input',

  data() {
    return {
      value: ''
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

  props: {
    placeholder: String,
    type: {
      type: String,
      default: 'text',
      validator(type) {
        return ['password', 'tel', 'number', 'email', 'date', 'text'].indexOf(type) > -1
      }
    },
    readonly: Boolean
  },

  methods: {
    handleInput(event) {
      const value = event.target.value
      if (this.jForm && this.jForm.formData) {
        this.jForm.formData[this.jFormItem.prop] = value
      }
      this.$emit('value', value)
    }
  },

  created() {

  }
}
</script>

<style lang="less">

  .is-error .j-input input {
    background-color: #fff6f6;
    border-color: #e0b4b4;
    color: #9f3a38;
    box-shadow: none;
  }

  .j-input {
    position: relative;
    font-weight: 400;
    font-style: normal;
    display: inline-flex;
    color: rgba(0,0,0,.87);
    font-size: 1em;

    &.disabled {
      opacity: .45;
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
      color: rgba(0,0,0,.87);
      border-radius: .28571429rem;
      transition: box-shadow .1s ease,border-color .1s ease;
      box-shadow: none;

      &:focus {
        border-color: #85b7d9;
        background: #fff;
        color: rgba(0,0,0,.8);
        box-shadow: none;
      }
    }
  }
</style>
