var vm01 = new Vue({
  el: '#example01',
  data: {
    items: [
      { msg: 'Foo' },
      { msg: 'Bar' }
    ]
  }
})

var vm02 = new Vue({
  el: '#example02',
  data: {
    parentMsg: 'Parent',
    items: [
      { msg: 'ooF' },
      { msg: 'raB' }
    ]
  }
})

var vm03 = new Vue({
  el: '#v-for-object',
  data: {
    object: {
      title: 'How to do lists in Vue',
      author: 'Jane Doe',
      publishedAt: '2020-01-21'
    }
  }
})

var vm04 = new Vue({
  el: '#listen',
  data: {
    mutations: [
      { method: 'push()' },
      { method: 'pop()' },
      { method: 'shift()' },
      { method: 'unshift()' },
      { method: 'splice()' },
      { method: 'sort()' },
      { method: 'reverse()' }
    ],
    non_mutations: [
      { method: 'filter()' },
      { method: 'concat()' },
      { method: 'slice()' }
    ],
    numbers: [ 1, 2, 3, 4, 5 ]
  },
  computed: {
    evenNumbers: function() {
      return this.numbers.filter(function(number) {
        return number % 2 === 0
      })
    }
  },
  methods: {
    even: function(numbers) {
      return numbers.filter(function(number) {
        return number % 2 === 0
      })
    }
  }
})

var vm05 = new Vue({
  data: {
    a: 1,
    userProfile: {
      name: 'Lily'
    }
  }
})

// 由于 JavaScript 的限制，Vue 不能检测对象属性的添加或删除
// vm05.a 是响应式的
vm05.b = 2 // 不是响应式的

// 对已经创建的实例，Vue 不允许动态添加根级别的响应式属性。但是，可以使用 Vue.set(object, propertyName, value) 方法向嵌套对象添加响应式属性。
// 例如
Vue.set(vm05.userProfile, 'age', 22)
vm05.$set(vm05.userProfile, 'age', 25)
console.log(JSON.stringify(vm05.userProfile))

// 为已有对象赋值多个新属性，比如使用 Object.assign() 或 _.extend()
// 在这种情况下，你应该用两个对象的属性创建一个新的对象。所以，如果你想添加新的响应式属性，
// 不要像这样：
Object.assign(vm05.userProfile, {
  age: 21,
  hobby: 'Draw'
})
// 应该这样做：
// 意思：把 source1（vm05.userProfile）和 source2（{age: 18,hobby: 'Draw'}） 两个对象的所有属性一并拷贝到 target（{}） 对象里
vm05.userProfile = Object.assign({}, vm05.userProfile, {
  age: 18,
  hobby: 'Draw'
})
