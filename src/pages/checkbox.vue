<template>
  <div class="page">
    <h2>Checkbox 复选框</h2>

    <div class="j-row">
      <div class="j-col">
        <card meta="Single">
          <j-checkbox v-model="select">Apple</j-checkbox>
          <p> > 您{{select ? '选择了' : '没有选择'}}Apple</p>
          <template slot="meta">
            Single usage
          </template>
          <template slot="code">
            <pre v-html="example1"></pre>
          </template>
        </card>
      </div>

      <div class="j-col">
        <card meta="Group">
          <j-checkbox-group
            v-model="fruits"
            :options="[
              { label: 'Apple', value: 'Apple' },
              { label: 'Banana', value: 'Banana' },
              { label: 'Cat', value: 'Cat' }
            ]">
          </j-checkbox-group>
          <p> > 您选择了: {{fruits}}</p>
          <template slot="meta">
            Group usage
          </template>
          <template slot="code">
            <pre v-html="example2"></pre>
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
        select: '',
        fruits: [],
        example1: this.highlight('<j-checkbox v-model="select">Apple</j-checkbox>'),
        example2: this.highlight(`<j-checkbox-group
  v-model="fruits"
  :options="[
    { label: 'Apple', value: 'Apple' },
    { label: 'Banana', value: 'Banana' },
    { label: 'Cat', value: 'Cat' }
  ]">
</j-checkbox-group>`)
      }
    },

    mixins: [highlight]
  }
</script>

<style scoped>
  p {
    margin: 10px 0;
  }
</style>
