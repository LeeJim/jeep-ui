<template>
  <div class="page">
    <h2>Input 输入框</h2>

    <h3>基本用法</h3>
    <j-input placeholder="请输入内容"></j-input>
    <pre v-html="example1">
    </pre>

    <h3>Disabled</h3>
    <j-input placeholder="请输入内容" disabled></j-input>
    <pre v-html="example2">
    </pre>

    <h3>Loading</h3>
    <j-input placeholder="正在加载..." loading></j-input>
    <pre v-html="example3">
    </pre>

    <h3>Icon</h3>
    <j-input placeholder="请输入内容" prefix-icon="filter"></j-input>
    <j-input placeholder="请输入内容" prefix-icon="edit"></j-input>
    <j-input placeholder="请输入内容" suffix-icon="exclamation-circle"></j-input>
    <j-input placeholder="请输入内容" suffix-icon="search"></j-input>
    <pre v-html="example4">
    </pre>
  </div>
</template>

<script>
  import highlight from '@/utils/mixins/highlight'
  
  export default {
    data() {
      return {
        example1: this.highlight('<j-input placeholder="请输入内容"></j-input>'),
        example2: this.highlight('<j-input placeholder="请输入内容" disabled></j-input>'),
        example3: this.highlight('<j-input placeholder="正在加载..." loading></j-input>'),
        example4: this.highlight(`<j-input placeholder="请输入内容" prefix-icon="filter"></j-input>
<j-input placeholder="请输入内容" prefix-icon="edit"></j-input>
<j-input placeholder="请输入内容" suffix-icon="exclamation-circle"></j-input>
<j-input placeholder="请输入内容" suffix-icon="search"></j-input>`)
      }
    },

    mixins: [highlight]
  }
</script>

<style scoped>
  .j-input {
    margin-bottom: 10px;
  }
</style>
