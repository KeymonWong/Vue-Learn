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