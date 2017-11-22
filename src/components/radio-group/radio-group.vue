
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
  import formMixin from '@/utils/mixins/form'
  
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

    mixins: [formMixin],

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
        this.setFormValue(item.value)
        this.clearError()
      }
    },

    created() {
      if (this.options) {
        const checkedItem = this.options.find(item => !!item.checked)
        if (checkedItem) {
          this.currentSelected = checkedItem.label
          this.setFormValue(checkedItem.value)
        }
      }
    }
  }
</script>

<style lang="less">
  .j-radio-group {
  }
</style>
