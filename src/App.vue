<template>
  <div id="app">
    <ul class="header">
      <li>
        <router-link :to="{ path: '/button' }">Button 按钮</router-link>
      </li>
      <li>
        <router-link :to="{ path: '/input' }">Input 输入框</router-link>
      </li>
      <li>
        <router-link :to="{ path: '/form' }">Form 表单</router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 100px;
  }

  * {
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
  }

  h2 {
    margin-bottom: 60px;
    margin-top: 60px;
  }

  h3 {
    margin-bottom: 40px;
    margin-top: 40px;
  }

  .header {
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    border-bottom: 2px solid #ccc;

    > li {
      line-height: 60px;
      margin-left: 30px;
    }
  }
</style>
