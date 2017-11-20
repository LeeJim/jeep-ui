
<template>
  <div class="j-radio-group">
    <j-radio
      v-for="opt in options"
      :key="opt.value"
      :checked="currentSelected === opt.label"
      @value="handleToggle($event, opt)" 
    >
      {{opt.label}}
    </j-radio>
  </div>
</template>

<script>
  export default {

    name: 'j-radio-group',

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
        currentSelected: ''
      }
    },

    props: {
      options: Array
    },

    methods: {
      handleToggle(inValue, item) {
        this.currentSelected = item.label
        this.$emit('value', item.value)
        if (this.jForm && this.jForm.formData) {
          this.jForm.formData[this.jFormItem.prop] = item.value
        }
      }
    },

    created() {
      if (this.options) {
        const checkedItem = this.options.find(item => !!item.checked)
        if (checkedItem) {
          this.currentSelected = checkedItem.label
          if (this.jForm && this.jForm.formData) {
            this.jForm.formData[this.jFormItem.prop] = checkedItem.value
          }
        }
      }
    }
  }
</script>

<style lang="less">
  .j-radio-group {
  }
</style>
