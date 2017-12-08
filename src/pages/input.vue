<template>
  <div class="page">
    <h2>Input 输入框</h2>

    <div class="j-row">
      <div class="j-col">
        <card meta="Base">
          <j-input placeholder="请输入内容"></j-input>
          <template slot="meta">
            Base input
          </template>
          <template slot="code">
            <pre v-html="example1"></pre>
          </template>
        </card>

        <card meta="Loading">
          <j-input placeholder="正在加载..." loading></j-input>
          <template slot="meta">
            Loading status input
          </template>
          <template slot="code">
            <pre v-html="example3"></pre>
          </template>
        </card>
      </div>
      <div class="j-col">
        <card meta="Disabled">
          <j-input placeholder="请输入内容" disabled></j-input>
          <template slot="meta">
            Disabled input
          </template>
          <template slot="code">
            <pre v-html="example2"></pre>
          </template>
        </card>

        <card meta="Icon">
          <j-input placeholder="请输入内容" prefix-icon="filter"></j-input>
          <j-input placeholder="请输入内容" prefix-icon="edit"></j-input>
          <j-input placeholder="请输入内容" suffix-icon="exclamation-circle"></j-input>
          <j-input placeholder="请输入内容" suffix-icon="search"></j-input>
          <template slot="meta">
            Prefix icon and suffix icon in the input
          </template>
          <template slot="code">
            <pre v-html="example4"></pre>
          </template>
        </card>
      </div>
    </div>
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
