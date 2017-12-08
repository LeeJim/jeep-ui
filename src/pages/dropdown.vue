<template>
  <div class="page">
    <h3>Dropdown 选择框</h3>

    <div class="j-row">
      <div class="j-col">
        <card meta="Base">
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
          <template slot="meta">
            Base usage
          </template>
          <template slot="code">
            <pre v-html="example1"></pre>
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