var bindClassVM = new Vue({
  el: '#bind-class',
  data: {
    isActive: true,
    error: null,
    styleObj: {
      color: 'red',
      fontSize: '13px'
    }
  },
  computed: {
    classObj: function () {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  }
}),

