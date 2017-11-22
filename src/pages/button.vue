<template>
  <div class="page">
    <h2>Button 按钮</h2>
    <p>常规的操作按钮</p>

    <h3>正常状态</h3>

    <j-button>默认状态</j-button>
    <j-button type="primary">primary</j-button>
    <j-button type="success">success</j-button>
    <j-button type="error">error</j-button>
    <j-button type="warning">warning</j-button>
    <pre v-html="example1">
    </pre>

    <h3>plain</h3>
    <j-button plain>默认状态</j-button>
    <j-button plain type="primary">primary</j-button>
    <j-button plain type="success">success</j-button>
    <j-button plain type="error">error</j-button>
    <j-button plain type="warning">warning</j-button>
    <pre v-html="example2">
    </pre>

    <h3>disabled</h3>
    <j-button disabled>默认状态</j-button>
    <j-button disabled type="primary">primary</j-button>
    <j-button disabled type="success">success</j-button>
    <j-button disabled type="error">error</j-button>
    <j-button disabled type="warning">warning</j-button>
    <pre v-html="example3">
    </pre>

    <h3>loading</h3>
    <j-button loading type="primary">加载中</j-button>
    <pre v-html="example4">
    </pre>
  </div>
</template>

<script>
  import highlight from '@/utils/mixins/highlight'
  
  export default {
    /* eslint-disable */
    data() {
      return {
        example1: this.highlight(`<j-button>默认状态</j-button>
<j-button type="primary">primary</j-button>
<j-button type="success">success</j-button>
<j-button type="error">error</j-button>
<j-button type="warning">warning</j-button>`),
        example2: this.highlight(`<j-button disabled>默认状态</j-button>
<j-button disabled type="primary">primary</j-button>
<j-button disabled type="success">success</j-button>
<j-button disabled type="error">error</j-button>
<j-button disabled type="warning">warning</j-button>`),
        example3: this.highlight(`<j-button disabled>默认状态</j-button>
<j-button disabled type="primary">primary</j-button>
<j-button disabled type="success">success</j-button>
<j-button disabled type="error">error</j-button>
<j-button disabled type="warning">warning</j-button>`),
        example4: this.highlight(`<j-button loading type="primary">加载中</j-button>`)
      }
    },

    mixins: [highlight]
  }
</script>

<style lang="less">
</style>
