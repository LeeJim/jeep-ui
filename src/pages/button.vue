<template>
  <div class="page-button">
    <h2>按钮 button</h2>
    <p>常规的操作按钮</p>

    <h3>正常状态</h3>

    <j-button>默认状态</j-button>
    <j-button type="primary">primary</j-button>
    <j-button type="success">success</j-button>
    <j-button type="error">error</j-button>
    <j-button type="warning">warning</j-button>

    <h3>plain</h3>
    <j-button plain>默认状态</j-button>
    <j-button plain type="primary">primary</j-button>
    <j-button plain type="success">success</j-button>
    <j-button plain type="error">error</j-button>
    <j-button plain type="warning">warning</j-button>

    <h3>disabled</h3>
    <j-button disabled>默认状态</j-button>
    <j-button disabled type="primary">primary</j-button>
    <j-button disabled type="success">success</j-button>
    <j-button disabled type="error">error</j-button>
    <j-button disabled type="warning">warning</j-button>

    <h3>loading</h3>
    <j-button loading type="primary">加载中</j-button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="less">
  
</style>
