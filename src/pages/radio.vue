<template>
  <div class="page-input">
    <h2>Radio 单选框</h2>

    <h3>基本用法</h3>
    <j-radio-group :options="options1" v-model="sex"></j-radio-group>

  </div>
</template>

<script>
export default {
  data() {
    return {
      options1: [{
        label: 'male',
        value: 1
      }, {
        label: 'female',
        value: 2,
        checked: true
      }],
      sex: ''
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
