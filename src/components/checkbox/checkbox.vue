<template>
  <div class="j-checkbox" :class="{
    'is-checked': inChecked
  }" @click="handleToggle">
    <input type="checkbox" :name="name">
    <label>
      <slot></slot>
    </label>
  </div>
</template>

<script>
  export default {

    name: 'j-checkbox',

    data() {
      return {
        inChecked: false
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
        this.inChecked = !this.inChecked
        this.$emit('input', this.inChecked)
      }
    },

    created() {
      this.$emit('input', this.checked)
      if (this.checked) {
        this.inChecked = this.checked
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/variables.less";
  .j-checkbox {
    position: relative;
    display: inline-block;
    backface-visibility: hidden;
    outline: 0;
    vertical-align: baseline;
    font-style: normal;
    min-height: 16px;
    font-size: 14px;
    line-height: 16px;
    min-width: 16px;
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
      }

      .is-checked&:before {
        background-color: @blue;
        border-color: @blue;
      }

      &:before {
        top: 0;
        left: 0;
        width: 16px;
        height: 16px;
        background: #fff;
        border: 1px solid #fff;
        border-color: rgba(34,36,38,.35);
        border-radius: 3px;
        transition: border .1s ease,opacity .1s ease,transform .1s ease,box-shadow .1s ease,-webkit-transform .1s ease;
      }

      &:after {
        top: 3px;
        left: 6px;
        width: 4px;
        height: 8px;
        border: 1px solid #fff;
        border-top: 0;
        border-left: 0;
        transform-origin: center;
        transform: rotate(45deg) scaleY(0);
        transition: transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;
      }

      .is-checked&:after {
        transform: rotate(45deg) scaleY(1);
      }
    }
  }
</style>