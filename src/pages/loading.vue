<template>
  <div class="page">
    <p class="reference">Thanks to：<a href="https://github.com/tobiasahlin/SpinKit" target="_blank">SpinKit</a></p>

    <h3>Loading</h3>

    <div class="j-row">
      <div class="j-col">
        <card meta="Base">
          <j-loading :loading="loading1"></j-loading>
          <template slot="meta">
            Base usage
          </template>
          <template slot="code">
            <pre v-html="highlight(example1)"></pre>
          </template>
        </card>

        <card meta="Mask">
          <j-loading :loading="loading1" :mask="false"></j-loading>
          <template slot="meta">
            Remove mask
          </template>
          <template slot="code">
            <pre v-html="highlight(example2)"></pre>
          </template>
        </card>

        <card meta="Remove Text">
          <j-loading :loading="loading1" :no-text="true"></j-loading>
          <template slot="meta">
            Remove Text
          </template>
          <template slot="code">
            <pre v-html="highlight(example3)"></pre>
          </template>
        </card>

        <card meta="Change Text">
          <j-loading :loading="loading1" text="正在拼命加载中..."></j-loading>
          <template slot="meta">
            Change Text
          </template>
          <template slot="code">
            <pre v-html="highlight(example4)"></pre>
          </template>
        </card>
      </div>

      <div class="j-col">
          <card meta="Style">
            <j-loading  :loading="loading1" type="double-bounce"></j-loading>
            <template slot="meta">
              Style <span>double-bounce</span>
            </template>
            <template slot="code">
              <pre v-html="highlight(example5)"></pre>
            </template>
          </card>

          <card meta="Style">
            <j-loading  :loading="loading1" type="rect"></j-loading>
            <template slot="meta">
              Style <span>rect</span>
            </template>
            <template slot="code">
              <pre v-html="highlight(example6)"></pre>
            </template>
          </card>

          <card meta="Style">
            <j-loading  :loading="loading1" type="cube"></j-loading>
            <template slot="meta">
              Style <span>cube</span>
            </template>
            <template slot="code">
              <pre v-html="highlight(example7)"></pre>
            </template>
          </card>

          <card meta="Style">
            <j-loading  :loading="loading1" type="scaleout"></j-loading>
            <template slot="meta">
              Style <span>scaleout</span>
            </template>
            <template slot="code">
              <pre v-html="highlight(example8)"></pre>
            </template>
          </card>

          <card meta="Style">
            <j-loading  :loading="loading1" type="bounce"></j-loading>
            <template slot="meta">
              Style <span>bounce</span>
            </template>
            <template slot="code">
              <pre v-html="highlight(example9)"></pre>
            </template>
          </card>

          <card meta="Style">
            <j-loading  :loading="loading1" type="sk-circle"></j-loading>
            <template slot="meta">
              Style <span>sk-circle</span>
            </template>
            <template slot="code">
              <pre v-html="highlight(example10)"></pre>
            </template>
          </card>

          <card meta="Style">
            <j-loading  :loading="loading1" type="sk-fading-circle"></j-loading>
            <template slot="meta">
              Style <span>sk-fading-circle</span>
            </template>
            <template slot="code">
              <pre v-html="highlight(example11)"></pre>
            </template>
          </card>
      </div>
    </div>
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