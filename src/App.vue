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
        <router-link :to="{ path: '/radio' }">Radio 单选框</router-link>
      </li>
      <li>
        <router-link :to="{ path: '/checkbox' }">CheckBox 复选框</router-link>
      </li>
      <li>
        <router-link :to="{ path: '/toggle' }">Toggle 开关</router-link>
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
  @import './assets/less/variables.less';
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
    margin-bottom: 30px;
    margin-top: 30px;
  }

  h3 {
    margin-bottom: 20px;
    margin-top: 20px;
  }

  .header {
    position: fixed;
    top: 0;
    width: 100%;
    overflow-x: scroll;
    display: flex;
    justify-content: center;
    background-color: #1b1c1d;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 12px;

    > li {
      padding-right: 15px;
      padding-left: 15px;
      border-right: 1px solid rgba(255, 255, 255, 0.5);
      line-height: 1em;

      &:last-of-type {
        border: 0;
      }

      > a {
        text-decoration: none;
        color: rgba(255, 255, 255, 0.5);
        &:hover, &.router-link-active {
          color: #fff;
        }
      }
    }
  }
</style>
