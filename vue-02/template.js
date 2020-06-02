var vm = new Vue({
  el: "#app",
  data: {
    msg: "文本",
    rawHtml: '<span style="color:red">this is red</span>',
    color: "red",
    num: 19,
    variable: 1,
    message: "abcd",
    lists: [
      { txt: "文本" },
      { txt: "原始 HTML: 为了输出真正的 HTML，需要使用 v-html 指令" },
      { txt: "特性: 大括号语法不能作用在 HTML 特性上, 必须使用 v-bind 指令" },
      {
        txt:
          "使用 JavaScript 表达式: 限制就是，每个绑定都只能包含单个表达式. 注意: 模板表达式都被放在沙盒中，只能访问全局变量的一个白名单，如 Math 和 Date 。你不应该在模板表达式中试图访问用户定义的全局变量。"
      }
    ]
  }
});
