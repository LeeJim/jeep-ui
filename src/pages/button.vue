<template>
  <div class="page">
    <h2>Button 按钮</h2>

    <div class="j-row">
      <div class="j-col">
        <card meta="Type">
          <j-button>Default</j-button>
          <j-button type="primary">Primary</j-button>
          <j-button type="success">Success</j-button>
          <j-button type="error">Error</j-button>
          <j-button type="warning">Warning</j-button>
          <template slot="meta">
            Type of Buttons: <span>default</span> <span>primary</span> <span>success</span> <span>error</span> <span>warning</span>
          </template>
          <template slot="code">
            <pre v-html="eType"></pre>
          </template>
        </card>

        <card meta="Type">
          <j-button type="primary" size="large">Large</j-button>
          <j-button type="primary">Default</j-button>
          <j-button type="primary" size="small">Small</j-button>
          <template slot="meta">
            Size of Buttons: <span>Large</span> <span>Default</span> <span>Small</span>
          </template>
          <template slot="code">
            <pre v-html="eSize"></pre>
          </template>
        </card>

        <card meta="Disabled">
          <j-button disabled>Default</j-button>
          <j-button disabled type="primary">Primary</j-button>
          <j-button disabled type="success">Success</j-button>
          <j-button disabled type="error">Error</j-button>
          <j-button disabled type="warning">Warning</j-button>
          <template slot="meta">
            To mark a button as disabled
          </template>
          <template slot="code">
            <pre v-html="eDisabled"></pre>
          </template>
        </card>
      </div>
      <div class="j-col">
        <card meta="Shape">
          <j-button type="primary" shape="plain">plain</j-button>
          <j-button type="primary" shape="dash">dash</j-button>
          <j-button type="primary" shape="square">square</j-button>
          <j-button type="primary" shape="circle" icon="search"></j-button>
          <template slot="meta">
            Shape of Buttons: <span>plain</span> <span>dash</span> <span>square</span> <span>circle</span> 
          </template>
          <template slot="code">
            <pre v-html="eShape"></pre>
          </template>
        </card>

        <card meta="Loading">
          <j-button loading type="primary">Loading</j-button>
          <template slot="meta">
            Loading status button
          </template>
          <template slot="code">
            <pre v-html="eLoading"></pre>
          </template>
        </card>

        <card meta="Icon">
          <j-button type="primary" icon="download"></j-button>
          <j-button type="primary" icon="paper-plane"></j-button>
          <j-button type="success" icon="search"></j-button>
          <j-button type="warning" icon="reply"></j-button>
          <template slot="meta">
            <span>Button</span> components can contain an <span>Icon</span>
            <p><strong>Icon name reference: </strong><a href="http://fontawesome.io/icons/">Font Awesome</a></p>
          </template>
          <template slot="code">
            <pre v-html="eIcon"></pre>
          </template>
        </card>
      </div>
    </div>
  </div>
</template>

<script>
  import highlight from '@/utils/mixins/highlight'
  
  export default {
    /* eslint-disable */
    data() {
      return {
        eType: this.highlight(`<j-button>Default</j-button>
<j-button type="primary">primary</j-button>
<j-button type="success">success</j-button>
<j-button type="error">error</j-button>
<j-button type="warning">warning</j-button>`),
        eShape: this.highlight(`<j-button type="primary" shape="plain">plain</j-button>
<j-button type="primary" shape="dash">dash</j-button>
<j-button type="primary" shape="square">square</j-button>
<j-button type="primary" shape="circle" icon="search"></j-button>`),
        eDisabled: this.highlight(`<j-button disabled>Default</j-button>
<j-button disabled type="primary">primary</j-button>
<j-button disabled type="success">success</j-button>
<j-button disabled type="error">error</j-button>
<j-button disabled type="warning">warning</j-button>`),
        eLoading: this.highlight(`<j-button loading type="primary">Loading</j-button>`),
        eIcon: this.highlight(`<j-button type="primary" icon="download"></j-button>
<j-button type="primary" icon="paper-plane"></j-button>
<j-button type="success" icon="search"></j-button>
<j-button type="warning" icon="reply"></j-button>`),
        eSize: this.highlight(`<j-button type="primary" size="large">Large</j-button>
<j-button type="primary">Default</j-button>
<j-button type="primary" size="small">Small</j-button>`)
      }
    },

    mixins: [highlight]
  }
</script>

<style lang="less">
  .j-button {
    margin-bottom: 10px;
  }
</style>
