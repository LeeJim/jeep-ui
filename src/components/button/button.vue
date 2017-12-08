<template>
  <button 
    @click="handleClick"
    :type="nativeType"
    :class="['j-button', `is-${type}`, `is-${shape}`,
      ['large', 'small'].includes(size) ? `is-${size}` : '',
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
    shape: String,
    size: String,
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
    display: inline-block;
    padding: 0 15px;
    height: 32px;
    outline: 0;
    
    vertical-align: baseline;
    background: #e0e1e2 none;
    color: rgba(0,0,0,.6);
    border: none;
    border-radius: 4px;
    -webkit-tap-highlight-color: transparent;

    line-height: 1;
    text-shadow: none;
    text-transform: none;
    text-align: center;
    text-decoration: none;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;

    &.is-success, &.is-primary, &.is-error, &.is-warning {
      color: #fff;
      text-shadow: none;
      background-image: none;
    }

    &.is-success {
      border: @green;
      background-color: @green;
      &:hover {
        background-color: darken(@green, 5%);
      }
    }

    &.is-primary {
      border-color: @blue;
      background-color: @blue;
      &:hover {
        background-color: darken(@blue, 5%);
      }
    }

    &.is-error {
      border: @red;
      background-color: @red;
      &:hover {
        background-color: darken(@red, 5%);
      }
    }
    
    &.is-warning {
      border: @yellow;
      background-color: @yellow;
      &:hover {
        background-color: darken(@yellow, 5%);
      }
    }

    &.is-dash {
      border-width: 1px;
      border-style: dashed ;
      background-color: #fff !important;
      &.is-success {
        color: @green;
      }
      &.is-primary {
        color: @blue;
      }
      &.is-error {
        color: @red;
      }
      &.is-warning {
        color: @yellow;
      }
    }

    &.is-circle {
      width: 32px;
      height: 32px;
      padding: 0;
      font-size: 16px;
      border-radius: 50%;
    }

    &.is-square {
      border-radius: 0 !important;
    }

    &.is-plain {
      box-shadow: 0 0 0 1px rgba(0,0,0,.6) inset;
      background-color: #fff !important;
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

    &.is-large {
      padding: 0 15px;
      height: 40px;
    }

    &.is-small {
      padding: 0 7px;
      height: 24px;
    }
  }
</style>
