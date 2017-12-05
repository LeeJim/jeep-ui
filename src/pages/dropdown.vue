<template>
  <div class="page">
    <h3>基本使用</h3>
    <j-dropdown
      :options="[{
        label: 'female',
        value: 0
        },{
        label: 'male',
        value: 1
      }]"
      >
     </j-dropdown>
     <pre v-html="example1"></pre>
  </div>
  
</template>

<script>
  import highlight from '@/utils/mixins/highlight'

  export default {
    data() {
      return {
        example1: this.highlight(`<j-dropdown
  :options="[
    { value: 0, label: 'female' },
    { value: 1, label: 'male' }
  ]"
  >
</j-dropdown>`)
      }
    },

    mixins: [highlight]
  }
</script>

<style lang="less">
  
</style>