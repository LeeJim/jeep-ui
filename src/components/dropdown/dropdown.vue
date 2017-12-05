
<template>
  <div class="j-dropdown" tabindex="0"
    ref="dropdown"
    @click="handleClick"
    :class="{
      'is-active': active
    }">
    <input
      ref="input"
      type="hidden" 
      :name="name" >
    <div 
      class="text" 
      :class="{ default: selected === '' }"
    >
      {{selected !== '' && options[selected].label || defaultText || '请选择'}}
    </div>
    <i class="fa fa-caret-down" aria-hidden="true"></i>
    <ul class="menu" tabindex="-1" @click.stop="handleItemClick">
      <li
        v-for="(opt, index) in options"
        :key="opt.value"
        :data-index="index"
        :data-value="opt.value"
        class="item"
        :class="{
          'selected': selected === index
        }"
      >
        {{opt.label}}
      </li>
    </ul>
  </div>
</template>

<script>
  import formMixin from '@/utils/mixins/form'

  export default {

    name: 'j-dropdown',

    data() {
      return {
        active: false,
        selected: ''
      }
    },

    mixins: [formMixin],

    inject: {
      jForm: {
        default: null
      },
      jFormItem: {
        default: null
      }
    },

    props: {
      name: String,
      options: Array,
      defaultText: String
    },

    methods: {
      handleClick() {
        this.active = !this.active
      },
      handleItemClick(event) {
        const target = event.target
        const { index, value } = target.dataset
        this.active = false
        if (this.selected === parseInt(index, 10)) return false
        this.selected = parseInt(index, 10)
        this.$emit('value', value)
        this.setFormValue(value)
        this.clearError()
        return value
      },
      handleDocumentClick(e) {
        const target = e.target
        const dropdown = this.$refs.dropdown

        if (target !== dropdown && !dropdown.contains(target)) {
          this.active = false
        }
      }
    },

    mounted() {
      document.addEventListener('click', this.handleDocumentClick, false)
    },

    destroyed() {
      document.removeEventListener('click', this.handleDocumentClick, false)
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/font-awesome/font-awesome.less";

  .j-dropdown {
    font-size: 14px;
    padding: 8px 1em;
    position: relative;
    max-width: 14em;
    flex: 1 0 auto;
    cursor: pointer;
    outline: 0;
    color: rgba(0, 0, 0, 0.87);
    border: 1px solid rgba(34,36,38,.15);
    background-color: #fff;
    border-radius: 4px;
    box-sizing: border-box;
    z-index: 10;

    .is-error & {
      background-color: #fff6f6;
      border-color: #e0b4b4;
      color: #9f3a38;
    }
    
    &.is-active {
      border-color: rgba(34,36,38,.35);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    &:hover {
      border-color: rgba(34,36,38,.35);
    }

    &:focus {
      border-color: #96c8da;
    }

    > .fa {
      position: absolute;
      top: 50%;
      right: 10px;
      margin-top: -.5em;
    }

    .text {
      line-height: 1;
      transition: none;
      &.default {
        color: rgba(191,191,191,.87);
      }
    }

    .menu {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      max-height: 14em;
      font-size: 1em;
      margin: 0 -1px;
      outline: 0;
      border-radius: 0 0 4px 4px;
      overflow-x: hidden;
      overflow-y: auto;
      transition: opacity .1s ease;
      text-align: left;
      visibility: hidden;
      border: 1px solid rgba(34,36,38,.15);
      margin-top: -1px;
      background-color: #fff;
      border-top-width: 0;

      .is-active& {
        visibility: visible;
        border-color: #96c8da;
        box-shadow: 0 2px 3px 0 rgba(34,36,38,.15);
        z-index: 11;
      }

      .item {
        color: rgba(0,0,0,.87);
        border-top: 1px solid #fafafa;
        padding: .8em 1.2em;
        line-height: 1;
        white-space: normal;
        word-wrap: normal;

        &:hover {
          background: rgba(0,0,0,.05);
          color: rgba(0,0,0,.95);
        }

        &.selected {
          background: rgba(0,0,0,.03);
          color: rgba(0,0,0,.95);
          font-weight: bold;
        }


      }
    }
  }
</style>
