var computeVM = new Vue({
  el: '#compute',
  data: {
    msg: 'hello',
    firstName: 'Foo',
    lastName: 'Bar',
  },
  // 计算属性
  computed: {
    // 计算属性的 getter
    reversedMsg: function () {
      // this 指向 vm 实例
      return this.msg.split('').reverse().join('')
    },

		/**
		 * 计算属性默认只有 getter，不过在需要时你也可以提供一个 setter 
		 */
    fullName: {
      // getter
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set: function (newVal) {
        var names = newVal.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  },

	/**
	 * 像绑定普通属性一样在模板中绑定计算属性。Vue 知道 vm.reversedMessage 依赖于 vm.message，
	 * 因此当 vm.message 发生改变时，所有依赖 vm.reversedMessage 的绑定也会更新。
	 * 而且最妙的是我们已经以声明的方式创建了这种依赖关系：计算属性的 getter 函数是没有副作用 (side effect) 的，这使它更易于测试和理解。
	 */

	/**
	 * 可以将同一函数定义为一个方法而不是一个计算属性。两种方式的最终结果确实是完全相同的。
	 * 然而，不同的是 计算属性是基于它们的响应式依赖进行缓存的。只在相关响应式依赖发生改变时它们才会重新求值。
	 * 这就意味着只要 message 还没有发生改变，多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数。
	 * 相比之下，每当触发重新渲染时，调用方法将总会再次执行函数.
	 * 
	 * 我们为什么需要缓存？假设我们有一个性能开销比较大的计算属性 A，它需要遍历一个巨大的数组并做大量的计算。
	 * 然后我们可能有其他的计算属性依赖于 A 。如果没有缓存，我们将不可避免的多次执行 A 的 getter！
	 * 如果你不希望有缓存，请用方法来替代。
	 */
})

// 调用 setter
// computeVM.fullName = 'John Doe'



/**
 * 在这个示例中，使用 watch 选项允许我们执行异步操作 (访问一个 API)，限制我们执行该操作的频率，
 * 并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的。
 */
var watchVM = new Vue({
  el: '#watch',
  data: {
    question: '',
    answer: 'I cannot give u a answer until u ask a question!',
  },
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    question: function (newQA, oldQA) {
      this.answer = 'Waiting for u to stop typing...'
      this.debouncedGetAnswer()
    }
  },
  created: function () {
    // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
    // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
    // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
    // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
    // 请参考：https://lodash.com/docs#debounce
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  methods: {
    getAnswer: function () {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Question usually contain a question mark. ;-'
        return
      }
      this.answer = 'Thinking...'
      var vm = this
      axios.get('https://yesno.wtf/api')
        .then(function (response) {
          vm.answer = _.capitalize(response.data.answer)
        })
        .catch(function (error) {
          vm.answer = 'Error! Could not reach the API.' + error
        })
    }
  }
})
