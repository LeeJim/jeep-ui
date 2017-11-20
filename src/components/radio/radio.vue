<template>
  <div class="j-radio" :class="{
    'is-checked': checked
  }" @click="handleToggle">
    <input type="radio" :name="name">
    <label>
      <slot></slot>
    </label>
  </div>
</template>

<script>
  export default {

    name: 'j-radio',

    inject: {
      jForm: {
        default: null
      },
      jFormItem: {
        default: null
      }
    },

    data() {
      return {
      }
    },

    props: {
      name: String, // native
      readonly: Boolean,
      checked: Boolean
    },

    methods: {
      handleToggle() {
        if (this.readonly) {
          return
        }
        this.$emit('value', !this.checked)
      }
    },

    created() {
      if ('checked' in this) {
        this.inChecked = this.checked
      }
    }
  }
</script>

<style lang="less">
  .j-radio {
    position: relative;
    display: inline-block;
    backface-visibility: hidden;
    outline: 0;
    vertical-align: baseline;
    font-style: normal;
    min-height: 17px;
    font-size: 1rem;
    line-height: 17px;
    min-width: 17px;
    margin-right: 8px;
    
    > input {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
    }

    > label {
      cursor: pointer;
      user-select: none;
      padding-left: 24px;
      padding-right: 8px;
      outline: 0;

      &:before, &:after {
        box-sizing: border-box;
        position: absolute;
        content: '';
        border-radius: 50%;
      }

      &:before {
        top: 0;
        left: 0;
        width: 16px;
        height: 16px;
        background: #fff;
        border: 1px solid #d4d4d5;
        border-color: rgba(34,36,38,.35);
        transition: border .1s ease,opacity .1s ease,transform .1s ease,box-shadow .1s ease,-webkit-transform .1s ease;
      }

      .is-checked&:after {
        top: 4px;
        left: 4px;
        width: 8px;
        height: 8px;
        background-color: #000;
      }
    }
  }
</style>