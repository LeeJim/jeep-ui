<template>
  <div class="j-form-item" :style="itemStyle"
    :class="{
      'label-left': jForm.labelPosition === 'left'
    }">
    <div class="j-form-item__label" :style="labelStyle">
      <label v-if="label || $slot.label" :for="labelFor">
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

  props: {
    label: String,
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
      const labelPosition = this.jForm.labelPosition
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

  inject: {
    jForm: {
      default: ''
    }
  },

  methods: {

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
    }

    &.label-left .j-form-item__label {
      text-align: left;
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
  }
</style>

