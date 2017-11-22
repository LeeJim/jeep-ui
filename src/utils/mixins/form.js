
export default {
  methods: {
    setFormValue(value) {
      if (this.jForm && this.jForm.formData) {
        this.jForm.formData[this.jFormItem.prop] = value
      }
    },
    clearError() {
      if (this.jForm && this.jForm.errorData) {
        this.jForm.errorData[this.jFormItem.prop] = ''
      }
    }
  }
}
