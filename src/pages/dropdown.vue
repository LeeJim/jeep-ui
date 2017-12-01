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
  </div>
  
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style lang="less">
  
</style>