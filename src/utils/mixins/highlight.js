import hljs from 'highlight.js'


export default {
  methods: {
    highlight(value, language = ['html']) {
      return hljs.highlightAuto(value, language).value
    }
  }
}
