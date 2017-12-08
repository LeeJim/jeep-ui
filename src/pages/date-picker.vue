<template>
  <div class="page">
    <h3>DatePicker 日期选择器</h3>

    <div class="j-row">
      <div class="j-col">
        <card meta="Base">
          <j-date-picker></j-date-picker>
          <template slot="meta">
            Base usage
          </template>
          <template slot="code">
            <pre v-html="highlight(example1)"></pre>
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
        example1: '<j-date-picker></j-date-picker>'
      }
    },

    mixins: [highlight]
  }
</script>

<style lang="less">
  
</style>