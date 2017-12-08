<template>
  <div class="page">
    <h2>Toggle 开关</h2>

    <div class="j-row">
      <div class="j-col">
        <card meta="Base">
          <j-toggle v-model="selected">接受协议</j-toggle>
          <p> > 您{{selected ? '接受了' : '不接受'}}协议</p>
          <template slot="meta">
            Base usage
          </template>
          <template slot="code">
            <pre v-html="example1"></pre>
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
        selected: '',
        example1: this.highlight('<j-toggle v-model="selected">Apple</j-toggle>')
      }
    },

    mixins: [highlight]
  }
</script>

<style scoped>
  p {
    margin: 10px 0;
  }
</style>
