// 数据属性和方法
// vm (ViewModel 的缩写), 表示 vue 实例, 可以传入一个 选项对象
// 当一个 Vue 实例被创建时，它将 data 对象中的所有的属性加入到 Vue 的响应式系统中。
// 当这些属性的值发生改变时，视图将会产生“响应”，即匹配更新为新的值。
var obj = {
	foo: 'bar'
}
// 禁用了响应式
Object.freeze(obj)

var data0 = { a: 1 }
var vm = new Vue({
	el: '#app01',
	// 上述对象被添加到一个 vue 实例中
	data: data0,
	// 测试 Object.freeze()
	// data: obj
})

// 获得这个实例上的属性
// 返回源数据中对应的字段
vm.a == data0.a // => true
// 设置属性也会影响到原始数据
vm.a = 3
data0.a // == 3
// 反之亦然
data0.a = 4
vm.a // == 4

// 注意的是只有当实例被创建时就已经存在于 data 中的属性才是响应式的, 也就是说如果你添加一个新的属性
// 比如: vm.b = 'hi', 则不会被响应系统追踪到变化, 也就不会触发任何视图的更新
// 使用 Object.freeze()，可以阻止修改现有的属性，也意味着响应系统无法追踪其变化。

// 除了数据属性,vue 还暴露了实例属性和方法,它们都有前缀 $, 便于和用户定义的属性区分开来. 比如
vm.$data === data0 // => true
vm.$el === document.getElementById('app01') // => true

// $watch 是一个实例方法
vm.$watch('a', function (newVal, oldVal) {
	// 这个回调将在 vm.a 改变后调用
})

// 实例生命周期钩子
// created 钩子可以用来在一个实例被创建之后执行代码
new Vue({
	data: {
		d: 1
	},
	created: function() {
		// this 指向 vm 实例
		console.log('d is: ' + this.d)
	}
})
// => "d is: 1"
// 也有一些其它钩子, 如mounted、updated和destroyed。生命周期钩子的 this 上下文指向调用它的 Vue 实例。

/** 特别注意: 
 * 不要在选项属性或回调上使用 箭头函数，比如 created: () => console.log(this.a) 或 vm.$watch('a', newValue => this.myMethod())。
 * 因为箭头函数并没有 this，this 会作为变量一直向上级词法作用域查找，直至找到为止，
 * 经常导致Uncaught TypeError: Cannot read property of undefined 或 Uncaught TypeError: this.myMethod is not a function 之类的错误。
 */