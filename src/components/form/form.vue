<template>
  <form class="j-form">
    <slot ></slot>
  </form>
</template>

<script>
export default {
  name: 'j-form',

  data() {
    return {}
  },

  provide() {
    return {
      jForm: this
    }
  },

  props: {
    errorTemplate: {
      type: String,
      default: '[label]不能为空'
    },
    labelPosition: {
      type: String,
      default: 'right'
    },
    formData: {
      type: Object,
      required: true
    },
    rules: Object,
    errorData: Object
  },
  methods: {
    validate(callback) {
      const rules = this.rules
      const keys = Object.keys(this.formData)

      keys.forEach((key) => {
        if (!rules[key]) {
          if (this.formData[key] === '') {
            this.errorData[key] = this.errorTemplate
          } else {
            this.errorData[key] = ''
          }
        } else {
          // 校验rule
          const rule = rules[key]

          if (typeof rule !== 'object') return
          if (Array.isArray(rule)) {
            const lengthOfRule = rule.length
            if (lengthOfRule < 1) return
            rule.forEach((test) => {
              console.log(test)
            })
          } else {
            // rule is object
          }
        }
      })
      callback(this.formData)
    }
  }
}
</script>

<style lang="less">

</style>
