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
      checked: Boolean,
      value: [String, Number]
    },

    methods: {
      handleToggle() {
        if (this.readonly) {
          return
        }
        this.inChecked = !this.inChecked
        this.$emit('value', this.inChecked)
      }
    },

    created() {
      if (this.checked) {
        this.inChecked = this.checked
        this.$emit('value', this.value)
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/font-awesome/font-awesome.less";
  .j-checkbox {
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
    margin-left: 8px;
    
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
        top: 0;
        left: 0;
        width: 17px;
        height: 17px;
        content: '';
        border-radius: 3px;
      }

      &:before {
        background: #fff;
        border: 1px solid #d4d4d5;
        border-color: rgba(34,36,38,.35);
        transition: border .1s ease,opacity .1s ease,transform .1s ease,box-shadow .1s ease,-webkit-transform .1s ease;
      }

      .is-checked&:after {
        content: "\f00c";
        font-family: FontAwesome;
        font-size: 17px;
      }
    }
  }
</style>