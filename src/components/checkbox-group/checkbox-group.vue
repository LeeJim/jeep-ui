
<template>
  <div class="j-checkbox-group">
    <j-checkbox
      v-for="opt in options"
      :key="opt.value"
      :value="opt.value"
      @value="handleToggle($event, opt)" 
    >
      {{opt.label}}
    </j-checkbox>
  </div>
</template>

<script>
  export default {

    name: 'j-checkbox-group',

    inject: {
      jForm: {
        default: null
      },
      jFormItem: {
        default: null
      }
    },

    props: {
      options: Array
    },

    data() {
      return {
        currentSelected: []
      }
    },

    methods: {
      handleToggle(select, item) {
        if (select) {
          this.currentSelected.push(item.value)
          this.$emit('value', item.value)
        } else {
          this.currentSelected.splice(this.currentSelected.indexOf(item.value), 1)
        }
        if (this.jForm && this.jForm.formData) {
          this.jForm.formData[this.jFormItem.prop] = [...this.currentSelected]
        }
      }
    },

    created() {
      if (this.options) {
        this.currentSelected = this.options.reduce((box, item) => {
          if (item.checked) {
            box.push(item.value)
          }
          return box
        }, [])
        if (this.jForm && this.jForm.formData) {
          this.jForm.formData[this.jFormItem.prop] = [...this.currentSelected]
        }
      }
    }
  }
</script>

<style lang="less">
  .j-checkbox-group {
  }
</style>
