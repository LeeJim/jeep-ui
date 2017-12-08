<template>
  <div class="page">
    <h2>Radio 单选框</h2>

    <div class="j-row">
      <div class="j-col">
        <card meta="Base">
          <j-radio-group 
             v-model="sex"
            :options="[
              { label: 'male', value: '男性' },
              { label: 'female', value: '女性' }
            ]"
          >
          </j-radio-group>
          <p> > 您的选择是：{{sex}}</p>
          <template slot="meta">
            Base radio
          </template>
          <template slot="code">
            <pre v-html="example1"></pre>
          </template>
        </card>
      </div>

      <div class="j-col">
        <card meta="Initialize">
          <j-radio-group 
             v-model="sex1"
            :options="[
              { label: 'male', value: '男性' },
              { label: 'female', value: '女性', checked: true }
            ]"
          >
          </j-radio-group>
          <p> > 您的选择是：{{sex1}}</p>
          <template slot="meta">
            Initialize radio
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
        receive: '',
        sex: '',
        sex1: '',
        example1: this.highlight(`<j-radio-group 
  v-model="sex"
  :options="[
    { label: 'male', value: '男性' },
    { label: 'female', value: '女性' }
  ]"
>
</j-radio-group>`),
        example2: this.highlight(`<j-radio-group 
  v-model="sex1"
  :options="[
    { label: 'male', value: '男性' },
    { label: 'female', value: '女性', checked: true }
  ]"
>
</j-radio-group>`)
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
