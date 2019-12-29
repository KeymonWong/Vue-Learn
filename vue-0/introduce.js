var app01 = new Vue({
  el: "#app01",
  data: {
    message: "hello vue01!",
    author: "created by keymon wong"
  }
});

var app02 = new Vue({
  el: "#app02",
  data: {
    msg: " 页面加载于 " + new Date().toLocaleDateString()
  }
});
// 动态更新
app02.msg = "哈哈哈 我更新了";

var app03 = new Vue({
  el: "#app03",
  data: {
    seen: false
  }
});
app03.seen = true;

var app04 = new Vue({
  el: "#app04",
  data: {
    todos: [
      { text: " 学习 js" },
      { text: " 学习 vue" },
      { text: " 成为前端大神" }
    ]
  }
});
app04.todos.push({ text: "插入新计划" });

var app05 = new Vue({
  el: "#app05",
  data: {
    msg: "反转我把"
  },
  methods: {
    reverseMsg: function() {
      this.msg = this.msg
        .split("")
        .reverse()
        .join("");
    }
  }
});

var app06 = new Vue({
  el: "#app06",
  data: {
    msg: "请输入文本!"
  }
});

// 注册一个组件, todo-item 为组件标识 id
Vue.component("todo-item", {
  // todo-item 组件现在接受一个
  // "prop"，类似于一个自定义特性。
  // 这个 prop 名为 todo。
  props: ["todo"],
  template: "<li>{{ todo.txt }}</li>"
});
var app07 = new Vue({
  el: "#app07",
  data: {
    groceryList: [
      {
        id: 0,
        txt: "蔬菜"
      },
      {
        id: 1,
        txt: "奶酪"
      },
      {
        id: 2,
        txt: "随便其它什么人吃的东西"
      }
    ]
  }
});
