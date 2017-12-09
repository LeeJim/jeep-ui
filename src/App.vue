<template>
  <div id="app">
    <div class="header">
      <router-link :to="{ path: '/' }">
        <img class="logo" src="http://7xnh42.com1.z0.glb.clouddn.com/suv.png" alt="logo">
        <span class="name">Jeep-UI</span>
      </router-link>
    </div>
    <div class="wrap">
      <div class="slide">
        <ul>
          <li v-for="item in links" :key="item.url">
            <router-link :to="{ path: '/' + item.url }">{{item.label}}</router-link>
          </li>
        </ul>
      </div>
      <div class="content">
        <router-view />
      </div>
    </div>
    <div class="footer">
      <a href="https://github.com/LeeJim/jeep-ui" target="_blank" class="github">Jeep-UI</a>
    </div>
    <iframe :src="starUrl" frameborder="0" scrolling="0" width="80px" height="20px" class="button-star"></iframe>
  </div>
</template>

<script>
export default {
  name: 'app',

  data() {
    return {
      starUrl: 'https://ghbtns.com/github-btn.html?user=leejim&repo=jeep-ui&type=star&count=true',
      links: [
        { url: 'button', label: 'Button 按钮' },
        { url: 'input', label: 'Input 输入框' },
        { url: 'radio', label: 'Radio 单选框' },
        { url: 'toggle', label: 'Toggle 开关' },
        { url: 'checkbox', label: 'CheckBox 复选框' },
        { url: 'dropdown', label: 'Dropdown 选择框' },
        { url: 'date-picker', label: 'DatePicker 日期选择器' },
        { url: 'form', label: 'Form 表单' },
        { url: 'loading', label: 'Loading 加载' }
      ]
    }
  }
}
</script>

<style lang="less">
  @import './assets/less/variables.less';
  @import './assets/less/highlight.less';
  @import './assets/normalize.css';

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    padding-bottom: 60px;
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
  }

  h3 {
    margin-bottom: 20px;
  }

  .header {
    height: 40px;
    line-height: 40px;
    padding: 0 40px;
    background-color: #fff;
    border-bottom: 20px solid #f8f8f8;

    img.logo {
      display: block;
      position: relative;
      float: left;
      top: 4px;
      width: 32px;
    }

    .name {
      display: inline-block;
      margin-left: 6px;
      text-decoration: none;
      color: #458774;
      font-weight: bold;
      font-size: 14px;
    }
  }

  .wrap {
    margin: 40px;
    background-color: #fff;
  }

  .slide {
    float: left;
    position: relative;
    width: 200px;

    li {
      height: 40px;
      line-height: 40px;

      > a {
        display: block;
        padding-left: 10px;
        color: #333;
        font-size: 14px;
        text-decoration: none;
        border-right: 3px solid #f8f8f8;
        &.router-link-active {
          color: #458774;
          border-color: #458774;
          background-color: rgba(69, 135, 116, 0.1);
        }
        &:hover {
          color: #458774;
        }
      }
    }
  }

  .content {
    width: 100%;
    padding-left: 220px;
    padding-right: 100px;
    box-sizing: border-box;
  }

  .j-row {
    margin-left: -8px;
    margin-right: -8px;

    .j-col {
      float: left;
      display: block;
      padding-left: 8px;
      padding-right: 8px;
      box-sizing: border-box;
      width: 50%;
    }

    &:after {
      content: "";
      display: block;
      clear: both;
    }
  }

  .page {
    text-align: left;
  }

  .button-star {
    position: fixed;
    top: 80px;
    right: 10px;
  }

  .reference {
    margin-bottom: 12px;
    padding-left: 10px;
    line-height: 1.5;
    color: #6a737d;
    border-left: 0.25em solid #dfe2e5;
    background-color: #fcfcfc;
  }

  .footer {
    margin-top: 30px;
    padding: 20px;
    text-align: center;
    .github {
      color: #bfbfbf;
      padding-left: 24px;
      text-decoration: none;
      background: url('./assets/github.png') no-repeat left center;
      background-size: contain;

      &:hover {
        color: #458774;
        background-image: url('./assets/github-active.png');
      }
    }
  }
</style>
