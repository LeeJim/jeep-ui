<template>
  <div class="page-form">
    <j-form :formData="data" :errorData="error" ref="form" :rules="rules">
      <j-form-item label="账号" prop="username">
        <j-input></j-input>
      </j-form-item>
      <j-form-item label="密码" prop="password">
        <j-input type="password"></j-input>
      </j-form-item>
      <j-form-item label="address" prop="address" :required="false">
        <j-input ></j-input>
      </j-form-item>
      <j-form-item>
        <j-button @click="submit">submit</j-button>
      </j-form-item>
    </j-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'jui',
      data: {},
      rules: {},
      error: {}
    }
  },
  methods: {
    submit() {
      this.$refs.form.validate((data) => {
        console.log(data)
      })
      setTimeout(() => {
        this.error.username = '已注册'
      }, 2000)
    }
  }
}
</script>

<style scoped>

</style>
