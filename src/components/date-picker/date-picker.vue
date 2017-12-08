
<template>
  <div class="j-date-picker" @click="showPanel" ref="datePicker">
    <j-input prefixIcon="calendar" readonly :value="value" :placeholder="defaultText"></j-input>
    <div class="panel" v-show="active">
      <div class="panel-header">
        <button type="button" class="f-left" @click="changeYear(-1)">
          <i class="fa fa-angle-double-left"></i>
        </button>
        <button type="button" class="f-left" @click="changeMonth(-1)">
          <i class="fa fa-angle-left"></i>
        </button>
        <span>{{year}} - {{month}}</span>
        <button type="button" class="f-right" @click="changeYear(1)">
          <i class="fa fa-angle-double-right"></i>
        </button>
        <button type="button" class="f-right" @click="changeMonth(1)">
          <i class="fa fa-angle-right"></i>
        </button>
      </div>
      <div class="panel-body">
        <table>
          <tbody @click.stop="handleDateClick">
            <tr>
              <th>日</th>
              <th>一</th>
              <th>二</th>
              <th>三</th>
              <th>四</th>
              <th>五</th>
              <th>六</th>
            </tr>
            <template v-for="week in allDates">
              <tr>
                <td v-for="date in week">
                  <div :class="date.split('.')[0]">{{date.split('.')[1]}}</div>
                </td>
              </tr>
            </template>
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
  import JInput from '../input'
  import JButton from '../button'

  export default {

    components: { JInput, JButton },

    name: 'j-date-picker',

    data() {
      return {
        value: '',
        active: false,
        now: new Date(),
        today: new Date()
      }
    },

    props: {
      format: {
        type: String,
        default: 'YYYY-MM-DD'
      },
      defaultText: {
        type: String,
        default: '选择日期'
      }
    },

    computed: {
      year() {
        return this.now.getFullYear()
      },
      month() {
        return this.now.getMonth() + 1
      },
      /* eslint-disable no-nested-ternary */
      allDates() {
        const date = new Date(this.now)
        const firstDate = new Date(date.setDate(1))
        date.setMonth(firstDate.getMonth() + 1)
        date.setDate(0)
        const lastDate = date
        const start = new Date(firstDate.setDate(firstDate.getDate() - firstDate.getDay()))
        const end = new Date(lastDate.setDate(lastDate.getDate() + (6 - lastDate.getDay())))
        const array = []
        for (let i = 0; start <= end; i++) {
          const index = Math.floor(i / 7)
          if (!array[index]) {
            array[index] = []
          }
          const className = []
          const curMonth = start.getMonth()
          if ((curMonth + 1) === this.month) {
            className.push('current')
          } else if (curMonth + 1 === this.month - 1 || (this.month === 1 && curMonth + 1 === 12)) {
            className.push('pre')
          } else {
            className.push('next')
          }

          if (start.getTime() === this.today.getTime()) {
            className.push('today')
          }
          array[index].push(`${className.join(' ')}.${start.getDate()}`)
          start.setDate(start.getDate() + 1)
        }
        return array
      }
    },

    methods: {
      showPanel() {
        this.active = true
      },

      changeMonth(dir) {
        const now = new Date(this.now)
        this.now = new Date(now.setMonth(now.getMonth() + (1 * dir)))
      },

      changeYear(dir) {
        const now = new Date(this.now)
        this.now = new Date(now.setYear(now.getFullYear() + (1 * dir)))
      },

      handleDateClick(e) {
        const target = e.target
        if (target.tagName.toLowerCase() !== 'div') return
        const classList = target.classList
        const date = new Date(this.now)
        date.setDate(target.innerHTML)
        this.active = false

        if (classList.contains('current')) {
          this.value = this.formatDate(date)
        } else if (classList.contains('pre')) {
          const month = this.month - 2
          date.setMonth(month)
          this.value = this.formatDate(date)
        } else {
          const month = this.month
          date.setMonth(month)
          this.value = this.formatDate(date)
        }
      },

      /* eslint-disable no-confusing-arrow */
      formatDate(date) {
        let format = this.format
        const formatNumber = num => num > 9 ? num : `0${num}`

        format = format.replace('YYYY', date.getFullYear())
        format = format.replace('MM', formatNumber(date.getMonth() + 1))
        format = format.replace('DD', formatNumber(date.getDate()))
        return format
      },

      handleDocumentClick(e) {
        const target = e.target
        const datePicker = this.$refs.datePicker

        if (target !== datePicker && !datePicker.contains(target)) {
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
  @import "../../assets/less/variables.less";
  .j-date-picker {
    display: inline-block;
    position: relative;

    > .panel {
      z-index: 10;
      position: absolute;
      top: 100%;
      left: 0;
      margin-top: 10px;
      padding: 0 15px 15px;
      font-size: 12px;
      background-color: #fff;
      border-radius: 4px;
      border: 1px solid #dfe4ed;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);

      > .panel-header {
        margin: 12px;
        text-align: center;
        line-height: 28px;

        &:after {
          content: '';
          display: block;
          clear: both;
        }

        .f-left {
          float: left;
        }

        .f-right {
          float: right;
        }

        button {
          font-size: 16px;
          color: #2d2f33;
          border: 0;
          background: transparent;
          cursor: pointer;
          outline: none;
          line-height: 1;
          padding: 0 7px;
          margin-top: 6px;

          &:hover {
            color: @blue;
          }
        }

        span {
          display: inline-block;
          font-size: 16px;
          font-weight: 500;
          padding: 0 5px;
          text-align: center;
          cursor: pointer;
          color: #5a5e66;
        }
      }

      > .panel-body {

        table {
          width: 100%;

          th, td {
            width: 24px;
            height: 24px;
            text-align: center;
            cursor: pointer;
          }

          td {
            width: 30px;
            height: 30px;
            padding: 2px 0;
            font-size: 12px;

            > div {
              margin: 0 auto;
              width: 30px;
              height: 30px;
              line-height: 30px;
              border-radius: 50%;
              box-sizing: border-box;

              &.pre, &.next {
                color: #b4bccc;
              }

              &.today {
                color: @blue;
                font-weight: bold;
                border: 1px solid @blue;
              }
            }

            &:hover div {
              background-color: #f0f0f0;
              font-weight: bold;
              color: inherit;
              border-color: transparent;
            }
          }
        }
      }
    }
  }
</style>
