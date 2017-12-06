<template>
  <button 
    @click="handleClick"
    :type="nativeType"
    :class="['j-button', `is-${type}`,
      plain ? 'is-plain' : '',
      loading ? 'is-loading' : '',
      disabled ? 'is-disabled' : '']"
  >
    <i v-if="loading" class="fa fa-spinner fa-spin fa-fw" aria-hidden="true"></i>
    <i v-if="icon" :class="`fa fa-${icon}`"></i>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'j-button',

  data() {
    return {}
  },

  props: {
    type: {
      type: String,
      default: 'default'
    },
    icon: String,
    plain: Boolean,
    disabled: Boolean,
    loading: Boolean,
    nativeType: {
      type: String,
      default: 'button'
    }
  },

  methods: {
    handleClick(event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style lang="less">
  @import "../../assets/less/variables.less";
  @import "../../assets/less/font-awesome/font-awesome.less";
  .j-button {
    cursor: pointer;
    color: rgba(0,0,0,.6);
    display: inline-block;
    min-height: 1em;
    outline: 0;
    border: none;
    vertical-align: baseline;
    background: #e0e1e2 none;
    color: rgba(0,0,0,.6);
    font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
    margin-right: 4px;
    padding: 12px 20px;
    text-transform: none;
    text-shadow: none;
    font-weight: 700;
    line-height: 1em;
    font-style: normal;
    text-align: center;
    text-decoration: none;
    border-radius: 4px;
    -webkit-tap-highlight-color: transparent;

    &.is-success, &.is-primary, &.is-error, &.is-warning {
      color: #fff;
      text-shadow: none;
      background-image: none;
    }

    &.is-success {
      background-color: @green;
    }

    &.is-primary {
      background-color: @blue;
    }

    &.is-error {
      background-color: @red;
    }
    
    &.is-warning {
      background-color: @yellow;
    }

    &.is-plain {
      box-shadow: 0 0 0 1px rgba(0,0,0,.6) inset;
      background-color: #fff;
      &.is-success {
        color: @green;
        box-shadow: 0 0 0 1px @green inset;
      }

      &.is-primary {
        color: @blue;
        box-shadow: 0 0 0 1px @blue inset;
      }

      &.is-error {
        color: @red;
        box-shadow: 0 0 0 1px @red inset;
      }
      
      &.is-warning {
        color: @yellow;
        box-shadow: 0 0 0 1px @yellow inset;
      }
    }

    &.is-disabled {
      opacity: .45;
      cursor: not-allowed;
    }
  }
</style>
