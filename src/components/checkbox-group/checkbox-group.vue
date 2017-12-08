
<template>
  <div class="j-checkbox-group">
    <j-checkbox
      v-for="opt in options"
      :key="opt.value"
      :value="opt.value"
      @input="handleToggle($event, opt)" 
    >
      {{opt.label}}
    </j-checkbox>
  </div>
</template>

<script>
  import formMixin from '@/utils/mixins/form'
  
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

    mixins: [formMixin],

    props: {
      options: Array,
      value: [String, Array]
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
        } else {
          this.currentSelected.splice(this.currentSelected.indexOf(item.value), 1)
        }
        this.$emit('input', this.currentSelected)
        this.setFormValue([...this.currentSelected])
        this.clearError()
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
        this.setFormValue([...this.currentSelected])
      }
    }
  }
</script>

<style lang="less">
  .j-checkbox-group {
  }
</style>
