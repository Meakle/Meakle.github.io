(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{597:function(t,s,a){t.exports=a.p+"assets/img/image-20210208173348410.8de0eff6.png"},598:function(t,s,a){t.exports=a.p+"assets/img/image-20210208174617349.3760cad6.png"},599:function(t,s,a){t.exports=a.p+"assets/img/image-20210208174824525.d6392f43.png"},600:function(t,s,a){t.exports=a.p+"assets/img/image-20210208175303516.8d3b8dfb.png"},644:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"接口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#接口"}},[t._v("#")]),t._v(" 接口")]),t._v(" "),n("p",[t._v("接口是为了给我们自定义的类型命名。")]),t._v(" "),n("ol",[n("li",[t._v("对象的形状进行描述")]),t._v(" "),n("li",[t._v("对类的一部分行为的抽象")])]),t._v(" "),n("div",{staticClass:"language-tsx extra-class"},[n("pre",{pre:!0,attrs:{class:"language-tsx"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printLabel")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("labelObj"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("label"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("string"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("labelObj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("label"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" myObj "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    num"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    label "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fxx'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printLabel")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myObj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("当你调用"),n("code",[t._v("printLabel")]),t._v("这个函数的时候，类型检查器会检查"),n("code",[t._v("myObj")]),t._v("这个对象，发现这个对象中存在一个属性值"),n("code",[t._v("label")]),t._v("，并且它的类型是"),n("code",[t._v("string")]),t._v("。因此这里不会报错，而多出来的属性Ts并不会报错。")]),t._v(" "),n("p",[t._v("我们可以使用接口的方式，重写上面的代码")]),t._v(" "),n("div",{staticClass:"language-tsx extra-class"},[n("pre",{pre:!0,attrs:{class:"language-tsx"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义了一个接口,这个接口只接受一个名为label的string类型变量")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LabelValue")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    label"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printLabel")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("labelObj"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("LabelValue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("labelObj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("label"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" myObj "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    num"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    label "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fxx'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printLabel")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myObj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("对于接口中声明的类型，我们必须要传递东西进去。否则会报错")]),t._v(" "),n("p",[n("img",{attrs:{src:a(597),alt:"报错提示"}})]),t._v(" "),n("p",[t._v("在接口中声明了"),n("code",[t._v("id")]),t._v("，但是函数的参数类型错误了。")]),t._v(" "),n("p",[t._v("对于这种情况，我们我们可以使用可选属性")]),t._v(" "),n("h3",{attrs:{id:"可选属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#可选属性"}},[t._v("#")]),t._v(" 可选属性")]),t._v(" "),n("p",[t._v("对于刚刚的例子，只需要在id后面加上一个"),n("code",[t._v("?")]),t._v("就可以代表这是一个可选（optional）的属性，也就是说，在你传递参数的时候，即使没有这个值，也没有关系。")]),t._v(" "),n("p",[t._v("我们接着改写上面的例子")]),t._v(" "),n("div",{staticClass:"language-tsx extra-class"},[n("pre",{pre:!0,attrs:{class:"language-tsx"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义了一个接口,这个接口只接受一个名为label的string类型变量")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LabelValue")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    id"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    num"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    label"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printLabel")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("labelObj"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("LabelValue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" label "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'meakle'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("labelObj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("label"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        labelObj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("label "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" label"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("labelObj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'我有num'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("labelObj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'我没有id,但是我准备给id一个值'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        labelObj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("labelObj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("label"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" labelObj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" myObj "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    num"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    label "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fxx'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("printLabel")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myObj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("其结果是：")]),t._v(" "),n("p",[n("img",{attrs:{src:a(598),alt:"结果"}})]),t._v(" "),n("p",[t._v("使用可选属性还有一个作用，就是可以防止你写错。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(599),alt:"防止你写错"}})]),t._v(" "),n("h3",{attrs:{id:"只读属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#只读属性"}},[t._v("#")]),t._v(" 只读属性")]),t._v(" "),n("div",{staticClass:"language-tsx extra-class"},[n("pre",{pre:!0,attrs:{class:"language-tsx"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LabelValue")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    id"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("readonly")]),t._v(" num "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    label"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("此时"),n("code",[t._v("num")]),t._v("属性就成为只读的了。")]),t._v(" "),n("p",[t._v("当我们要修改"),n("code",[t._v("num")]),t._v("的时候将会出错。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(600),alt:"修改只读属性报错"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);