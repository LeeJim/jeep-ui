<template>
  <div class="page">
    <h2>Radio 单选框</h2>

    <h3>基本使用</h3>
    <j-radio-group 
       v-model="sex"
      :options="[
        { label: 'male', value: '男性' },
        { label: 'female', value: '女性' }
      ]"
    >
    </j-radio-group>
    <p> > 您的选择是：{{sex}}</p>
    <pre v-html="example1"></pre>

    <h3>默认选择</h3>
    <j-radio-group 
       v-model="sex1"
      :options="[
        { label: 'male', value: '男性' },
        { label: 'female', value: '女性', checked: true }
      ]"
    >
    </j-radio-group>
    <p> > 您的选择是：{{sex1}}</p>
    <pre v-html="example2"></pre>
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
