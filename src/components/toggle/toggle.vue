<template>
  <div class="j-toggle" :class="{
    'is-checked': inChecked
  }" @click="handleToggle">
    <input type="radio">
    <label>
      <slot></slot>
    </label>
  </div>
</template>

<script>
  import formMixin from '@/utils/mixins/form'

  export default {

    name: 'j-toggle',

    inject: {
      jForm: {
        default: null
      },
      jFormItem: {
        default: null
      }
    },

    mixins: [formMixin],

    data() {
      return {
        inChecked: false
      }
    },

    props: {
      checked: Boolean
    },

    methods: {
      handleToggle() {
        if (this.readonly) {
          return
        }
        const state = !this.inChecked
        this.inChecked = state
        this.$emit('input', state)
        this.setFormValue(state)
        this.clearError()
      }
    },

    created() {
      if ('checked' in this) {
        this.inChecked = this.checked
      }
      this.setFormValue(this.inChecked)
      this.$emit('input', this.checked)
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/variables.less";
  .j-toggle {
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
      display: block;
      cursor: pointer;
      user-select: none;
      padding-left: 5em;
      padding-right: 8px;
      outline: 0;
      line-height: 24px;

      &:before, &:after {
        box-sizing: border-box;
        position: absolute;
        content: '';
        top: 0;
        left: 0;
      }

      .is-checked&:before {
        background-color: @blue !important;
      }

      &:hover:before {
        background: rgba(0,0,0,.2);
      }

      &:before {
        display: block;
        position: absolute;
        content: '';
        z-index: 1;
        -webkit-transform: none;
        transform: none;
        border: none;
        background: rgba(0,0,0,.1);
        box-shadow: none;
        width: 3.5rem;
        height: 1.5rem;
        border-radius: 500rem;
        transition: background .5s;
      }

      &:after {
        z-index: 1;
        width: 1.5em;
        height: 1.5em;
        background: #fff linear-gradient(transparent,rgba(0,0,0,.05));
        transition: left .3s;
        border-radius: 50%;
      }

      .is-checked&:after {
        left: 2.1em;
      }
    }
  }
</style>