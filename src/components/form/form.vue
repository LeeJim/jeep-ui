<template>
  <div class="j-form">
    <slot></slot>
  </div>
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
      default: '请选择[label]'
    },
    labelPosition: {
      type: String,
      default: 'top'
    }
  },
  methods: {

  }
}
</script>

<style lang="less">

</style>
