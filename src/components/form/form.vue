<template>
  <form class="j-form">
    <slot ></slot>
  </form>
</template>

<script>
  import Schema from 'async-validator'
  import formMixin from '@/utils/mixins/form'

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

    mixins: [formMixin],

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
      /* eslint-disable consistent-return */
      validate(callback) {
        const rules = this.rules
        const keys = Object.keys(this.formData)
        let state = true
        let count = keys.length

        let promise
        // if no callback, return promise
        if (typeof callback !== 'function' && window.Promise) {
          /* eslint-disable */
          promise = new window.Promise((resolve, reject) => {
            callback = function (valid) {
              valid ? resolve(valid) : reject(valid)
            }
          })
        }

        keys.forEach((key) => {
          const rule = rules[key]
          const descriptor = { [key]: rule }
          const validator = new Schema(descriptor)
          validator.validate({ [key]: this.formData[key] }, (errors) => {
            if (errors) {
              state = false
              this.errorData[key] = errors[0].message
            }
            if (--count === 0) {
              callback(state, this.formData)
            }
          })
        })

        if (promise) {
          return promise
        }
      },

      initialRule() {
        const rules = { ...this.rules }
        const keys = Object.keys(this.formData)
        keys.forEach((key) => {
          if (!this.rules[key]) {
            rules[key] = { required: true, message: this.errorTemplate }
          }
        })
        return rules
      }
    }
  }
</script>

<style lang="less">

</style>
