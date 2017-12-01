<template>
  <div class="page">
    <p>样式来源： <a href="https://github.com/tobiasahlin/SpinKit" target="_blank">SpinKit</a></p>
    <h3>基本使用</h3>

    <j-loading :loading="loading1"></j-loading>
    <pre v-html="highlight(example1)"></pre>

    <h3>取消遮罩</h3>
    <j-loading :loading="loading1" :mask="false"></j-loading>
    <pre v-html="highlight(example2)"></pre>

    <h3>不需要文字</h3>
    <j-loading :loading="loading1" :no-text="true"></j-loading>
    <pre v-html="highlight(example3)"></pre>

    <h3>修改文字</h3>
    <j-loading :loading="loading1" text="正在拼命加载中..."></j-loading>
    <pre v-html="highlight(example4)"></pre>

    <h3>多种风格</h3>

    <j-loading  :loading="loading1" type="double-bounce"></j-loading>
    <pre v-html="highlight(example5)"></pre>

    <j-loading  :loading="loading1" type="rect"></j-loading>
    <pre v-html="highlight(example6)"></pre>

    <j-loading  :loading="loading1" type="cube"></j-loading>
    <pre v-html="highlight(example7)"></pre>

    <j-loading  :loading="loading1" type="scaleout"></j-loading>
    <pre v-html="highlight(example8)"></pre>

    <j-loading  :loading="loading1" type="bounce"></j-loading>
    <pre v-html="highlight(example9)"></pre>

    <j-loading  :loading="loading1" type="sk-circle"></j-loading>
    <pre v-html="highlight(example10)"></pre>

    <j-loading  :loading="loading1" type="sk-fading-circle"></j-loading>
    <pre v-html="highlight(example11)"></pre>
  </div>
</template>

<script>
  import highlight from '@/utils/mixins/highlight'

  export default {
    data() {
      return {
        loading1: true,
        example1: '<j-loading :loading="loading1"></j-loading>',
        example2: '<j-loading :loading="loading1" :mask="false"></j-loading>',
        example3: '<j-loading :loading="loading1" :no-text="true"></j-loading>',
        example4: '<j-loading :loading="loading1" text="正在拼命加载中..."></j-loading>',
        example5: '<j-loading  :loading="loading1" type="double-bounce"></j-loading>',
        example6: '<j-loading  :loading="loading1" type="rect"></j-loading>',
        example7: '<j-loading  :loading="loading1" type="cube"></j-loading>',
        example8: '<j-loading  :loading="loading1" type="scaleout"></j-loading>',
        example9: '<j-loading  :loading="loading1" type="bounce"></j-loading>',
        example10: '<j-loading  :loading="loading1" type="sk-circle"></j-loading>',
        example11: '<j-loading  :loading="loading1" type="sk-fading-circle"></j-loading>'
      }
    },

    mixins: [highlight],

    methods: {
      handleLoaded() {
        this.loading1 = false
      }
    }
  }
</script>

<style lang="less">
  .j-loading {
    margin-bottom: 20px;

    pre + & {
      margin-top: 20px;
    }
  }
</style>