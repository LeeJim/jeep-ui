<template>
  <div class="page">
    <j-form :formData="data" :errorData="error" ref="form" :rules="rules">
      <j-form-item label="活动名称" prop="name">
        <j-input></j-input>
      </j-form-item>
      <j-form-item label="活动风格" prop="style">
        <j-input></j-input>
      </j-form-item>
      <j-form-item label="特殊资源" prop="resource">
        <j-radio-group :options="resources"></j-radio-group>
      </j-form-item>
      <j-form-item label="即时配送" prop="delivery">
        <j-toggle ></j-toggle>
      </j-form-item>
      <j-form-item label="活动性质" prop="type">
        <j-checkbox-group :options="types"></j-checkbox-group>
      </j-form-item>
      <j-form-item>
        <j-button @click="submit">submit</j-button>
      </j-form-item>
      <pre v-html="example1">
      </pre>
    </j-form>
  </div>
</template>

<script>
  import highlight from '@/utils/mixins/highlight'

  export default {
    data() {
      return {
        data: {},
        rules: {
          name: { min: 3, max: 6, message: '请输入3-6个字符' }
        },
        error: {},
        types: [
          { value: 0, label: '美食/餐厅线上活动' },
          { value: 1, label: '地推活动' },
          { value: 2, label: '线下主题活动' },
          { value: 3, label: '单纯品牌曝光' }
        ],
        resources: [
          { value: 0, label: '线上品牌商赞助' },
          { value: 1, label: '线下场地免费' }
        ],
        example1: this.highlight(`<j-form :formData="data" :errorData="error" ref="form" :rules="rules">

  <j-form-item label="活动名称" prop="name">
    <j-input></j-input>
  </j-form-item>

  <j-form-item label="活动风格" prop="style">
    <j-input></j-input>
  </j-form-item>

  <j-form-item label="特殊资源" prop="resource">
    <j-radio-group :options="resources"></j-radio-group>
  </j-form-item>

  <j-form-item label="即时配送" prop="delivery">
    <j-toggle ></j-toggle>
  </j-form-item>

  <j-form-item label="活动性质" prop="type">
    <j-checkbox-group :options="types"></j-checkbox-group>
  </j-form-item>

  <j-form-item>
    <j-button @click="submit">submit</j-button>
  </j-form-item>
  
</j-form>`)
      }
    },

    mixins: [highlight],

    methods: {
      submit() {
        this.$refs.form.validate((state, data) => {
          if (state) {
            console.log(data)
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
