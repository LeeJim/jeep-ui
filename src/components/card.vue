<template>
  <div class="card">
    <div class="card-body">
      <slot></slot>
    </div>
    <div class="card-meta">
      <div class="meta-title">{{meta}}</div>
      <slot name="meta"></slot>
      <div class="expand-icon"  @click="showCode = !showCode">
        <img :class="[showCode ? 'hide' : 'show']" src="http://7xnh42.com1.z0.glb.clouddn.com/wSAkBuJFbdxsosKKpqyq.svg" alt="">
        <img :class="[showCode ? 'show' : 'hide']" src="http://7xnh42.com1.z0.glb.clouddn.com/OpROPHYqWmrMDBFMZtKF.svg" alt="">
      </div>
    </div>
    <div class="card-code" v-show="showCode">
      <slot name="code"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showCode: false
      }
    },
    props: {
      meta: String
    }
  }
</script>

<style lang="less">
  @borderColor: #e9e9e9;
  .card {
    margin-bottom: 16px;
    box-sizing: border-box;
    background-color: #fff;
    box-shadow: 0 2px 3px 0 #e9e9e9;
    border: 1px solid @borderColor;
    border-radius: 2px 2px 0 0;

    .card-body {
      padding: 32px 10px;
    }

    .card-meta {
      padding: 18px 32px;
      position: relative;
      font-size: 16px;
      line-height: 2.4;
      border-top: 1px solid @borderColor;

      .meta-title {
        position: absolute;
        top: -14px;
        padding: 1px 8px;
        font-weight: bold;
        font-size: 14px;
        line-height: 2;
        background-color: #fff;
      }

      > span {
        margin: 0 3px;
        background: #f7f7f7;
        padding: .2em .4em;
        border-radius: 3px;
        font-size: .9em;
        border: 1px solid #eee;
      }

      .expand-icon {
        position: absolute;
        right: 16px;
        bottom: 23px;
        cursor: pointer;
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;

        > img {
          opacity: .55;
          transition: all 0.4s;
          user-select: none;
          position: absolute;
          left: 0;
          top: 0;
          margin: 0;
          max-width: 100%;
          vertical-align: baseline;
          box-shadow: none;

          &.show {
            opacity: 1;
            pointer-events: auto;
          }

          &.hide {
            opacity: 0;
            pointer-events: none;
          }
        }
      }
    }

    .card-code {
      border-top: 1px solid @borderColor;
    }
  }
</style>