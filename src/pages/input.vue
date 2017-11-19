<template>
  <div class="page-input">
    <h2>Input 输入框</h2>

    <h3>基本用法</h3>
    <j-input placeholder="请输入内容"></j-input>

    <h3>Disabled</h3>
    <j-input placeholder="请输入内容" disabled></j-input>

    <h3>Loading</h3>
    <j-input placeholder="正在加载..." loading></j-input>

    <h3>Icon</h3>
    <j-input placeholder="请输入内容" prefix-icon="filter"></j-input>
    <j-input placeholder="请输入内容" prefix-icon="edit"></j-input>
    <j-input placeholder="请输入内容" suffix-icon="exclamation-circle"></j-input>
    <j-input placeholder="请输入内容" suffix-icon="search"></j-input>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
