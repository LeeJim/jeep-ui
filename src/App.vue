<template>
  <div id="app">
    <ul>
      <li>
        <router-link :to="{ path: '/button' }">button</router-link>
      </li>
      <li>
        <router-link :to="{ path: '/input' }">input</router-link>
      </li>
      <li>
        <router-link :to="{ path: '/form' }">form</router-link>
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
  margin-top: 60px;
}

* {
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
}

h2 {
  margin-bottom: 40px;
  margin-top: 40px;
}

h3 {
  margin-bottom: 20px;
  margin-top: 20px;
}
</style>
