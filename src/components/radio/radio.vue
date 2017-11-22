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
  @import "../../assets/less/variables.less";
  .j-radio {
    position: relative;
    display: inline-block;
    backface-visibility: hidden;
    outline: 0;
    vertical-align: baseline;
    font-style: normal;
    min-height: 17px;
    font-size: 14px;
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

      .is-checked& {
        color: @blue;
      }

      &:before, &:after {
        box-sizing: border-box;
        position: absolute;
        content: '';
        border-radius: 50%;
      }

      &:before {
        top: 0;
        left: 0;
        width: 14px;
        height: 14px;
        background: #fff;
        border: 1px solid #d4d4d5;
        border-color: rgba(34,36,38,.35);
        transition: border .1s ease,opacity .1s ease,transform .1s ease,box-shadow .1s ease,-webkit-transform .1s ease;
      }

      .is-checked&:before {
        background-color: @blue;
        border-color: @blue;
      }

      .is-checked&:after {
        top: 5px;
        left: 5px;
        width: 4px;
        height: 4px;
        background-color: #fff;
      }
    }
  }
</style>