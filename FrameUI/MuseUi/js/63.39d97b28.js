(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[63],{"47+F":function(s,t,a){"use strict";a.r(t);var r=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"markdown-body"},[a("h1",[s._v("面包屑导航")]),s._m(0),s._m(1),s._m(2),a("demo-block",{attrs:{jsfiddle:{html:'<mu-container>\n  <mu-breadcrumbs>\n    <mu-breadcrumbs-item v-for="item in items" :key="item.text" :disabled="item.disabled">{{item.text}}</mu-breadcrumbs-item>\n  </mu-breadcrumbs>\n  <mu-breadcrumbs divider="—">\n    <mu-breadcrumbs-item v-for="item in items" :key="item.text" :disabled="item.disabled">{{item.text}}</mu-breadcrumbs-item>\n  </mu-breadcrumbs>\n</mu-container>\n\n',script:"\nexport default {\n  data () {\n    return {\n      items: [\n        {\n          text: 'Dashboard',\n          disabled: false\n        },\n        {\n          text: 'Link 1',\n          disabled: false\n        },\n        {\n          text: 'Link 2',\n          disabled: true\n        }\n      ]\n    }\n  }\n};\n",style:null}}},[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[a("mu-container",[a("mu-breadcrumbs",s._l(s.items,function(t){return a("mu-breadcrumbs-item",{key:t.text,attrs:{disabled:t.disabled}},[s._v(s._s(t.text))])})),a("mu-breadcrumbs",{attrs:{divider:"—"}},s._l(s.items,function(t){return a("mu-breadcrumbs-item",{key:t.text,attrs:{disabled:t.disabled}},[s._v(s._s(t.text))])}))],1)],1),a("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0,attrs:{class:"hljs"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-container")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-breadcrumbs")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-breadcrumbs-item")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"item in items"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":key")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"item.text"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":disabled")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"item.disabled"')]),s._v(">")]),s._v("{{item.text}}"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-breadcrumbs-item")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-breadcrumbs")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-breadcrumbs")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("divider")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"—"')]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-breadcrumbs-item")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"item in items"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":key")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"item.text"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":disabled")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"item.disabled"')]),s._v(">")]),s._v("{{item.text}}"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-breadcrumbs-item")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-breadcrumbs")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-container")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data () {\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("items")]),s._v(": [\n        {\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Dashboard'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n        },\n        {\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Link 1'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n        },\n        {\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Link 2'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n        }\n      ]\n    }\n  }\n};\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),s._m(3),s._m(4),a("demo-block",{attrs:{jsfiddle:{html:'<mu-container>\n  <mu-breadcrumbs>\n    <mu-icon value="forward" slot="divider"></mu-icon>\n    <mu-breadcrumbs-item v-for="item in items" :key="item.text" :disabled="item.disabled">{{item.text}}</mu-breadcrumbs-item>\n  </mu-breadcrumbs>\n  <mu-breadcrumbs divider="—">\n    <mu-icon value="chevron_right" slot="divider"></mu-icon>\n    <mu-breadcrumbs-item v-for="item in items" :key="item.text" :disabled="item.disabled">{{item.text}}</mu-breadcrumbs-item>\n  </mu-breadcrumbs>\n</mu-container>\n\n',script:"\nexport default {\n  data () {\n    return {\n      items: [\n        {\n          text: 'Dashboard',\n          disabled: false\n        },\n        {\n          text: 'Link 1',\n          disabled: false\n        },\n        {\n          text: 'Link 2',\n          disabled: true\n        }\n      ]\n    }\n  }\n};\n",style:null}}},[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[a("mu-container",[a("mu-breadcrumbs",[a("mu-icon",{attrs:{slot:"divider",value:"forward"},slot:"divider"}),s._l(s.items,function(t){return a("mu-breadcrumbs-item",{key:t.text,attrs:{disabled:t.disabled}},[s._v(s._s(t.text))])})],2),a("mu-breadcrumbs",{attrs:{divider:"—"}},[a("mu-icon",{attrs:{slot:"divider",value:"chevron_right"},slot:"divider"}),s._l(s.items,function(t){return a("mu-breadcrumbs-item",{key:t.text,attrs:{disabled:t.disabled}},[s._v(s._s(t.text))])})],2)],1)],1),a("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0,attrs:{class:"hljs"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-container")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-breadcrumbs")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-icon")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"forward"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"divider"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-icon")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-breadcrumbs-item")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"item in items"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":key")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"item.text"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":disabled")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"item.disabled"')]),s._v(">")]),s._v("{{item.text}}"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-breadcrumbs-item")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-breadcrumbs")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-breadcrumbs")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("divider")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"—"')]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-icon")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"chevron_right"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"divider"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-icon")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-breadcrumbs-item")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"item in items"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":key")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"item.text"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":disabled")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"item.disabled"')]),s._v(">")]),s._v("{{item.text}}"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-breadcrumbs-item")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-breadcrumbs")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-container")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data () {\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("items")]),s._v(": [\n        {\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Dashboard'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n        },\n        {\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Link 1'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n        },\n        {\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("text")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Link 2'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("disabled")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n        }\n      ]\n    }\n  }\n};\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),s._m(5),s._m(6),s._m(7),s._m(8),s._m(9),s._m(10)],1)},e=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[a("code",{pre:!0},[s._v("mu-breadcrumbs")]),s._v(" 组件是一个页面辅助导航器。它可以使用图标或文字符作为分隔符。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("h2",{attrs:{id:"shi-li"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shi-li","aria-hidden":"true"}},[s._v("¶")]),s._v(" 示例")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("默认情况下使用文本分隔符，通过设定 "),a("code",{pre:!0},[s._v("divider")]),s._v(" 属性改变。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("h2",{attrs:{id:"tu-biao-fen-ge-fu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tu-biao-fen-ge-fu","aria-hidden":"true"}},[s._v("¶")]),s._v(" 图标分隔符")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("通过 "),a("code",{pre:!0},[s._v("divider")]),s._v(" slot 定制不同的分隔符。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("h2",{attrs:{id:"breadcrumbs-props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#breadcrumbs-props","aria-hidden":"true"}},[s._v("¶")]),s._v(" Breadcrumbs Props")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("参数")]),a("th",[s._v("介绍")]),a("th",[s._v("类型")]),a("th",[s._v("可选值")]),a("th",[s._v("默认值")])])]),a("tbody",[a("tr",[a("td",[s._v("divider")]),a("td",[s._v("分隔符")]),a("td",[s._v("String")]),a("td",[s._v("—")]),a("td",[s._v("‘/’")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("h2",{attrs:{id:"breadcrumbs-slots"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#breadcrumbs-slots","aria-hidden":"true"}},[s._v("¶")]),s._v(" Breadcrumbs Slots")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("名称")]),a("th",[s._v("介绍")])])]),a("tbody",[a("tr",[a("td",[s._v("divider")]),a("td",[s._v("分隔符插槽，设置之后会覆盖 "),a("code",{pre:!0},[s._v("divider")]),s._v(" 属性.")])]),a("tr",[a("td",[s._v("default")]),a("td",[s._v("—")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("h2",{attrs:{id:"breadcrumbs-item-props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#breadcrumbs-item-props","aria-hidden":"true"}},[s._v("¶")]),s._v(" Breadcrumbs Item Props")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("参数")]),a("th",[s._v("介绍")]),a("th",[s._v("类型")]),a("th",[s._v("可选值")]),a("th",[s._v("默认值")])])]),a("tbody",[a("tr",[a("td",[s._v("disabled")]),a("td",[s._v("是否禁用此导航，一般用于面包屑导航的最后一个")]),a("td",[s._v("Boolean")]),a("td",[s._v("—")]),a("td",[s._v("false")])]),a("tr",[a("td",[s._v("href")]),a("td",[s._v("相当于 a 标签的 href属性，设置之后会渲染成 a 标签，默认是使用button标签")]),a("td",[s._v("String")]),a("td",[s._v("—")]),a("td",[s._v("—")])]),a("tr",[a("td",[s._v("to")]),a("td",[s._v("表示目标路由的链接。设置之后组件会被渲染成"),a("code",{pre:!0},[s._v("router-link")]),s._v(", 当被点击后，内部会立刻把 "),a("code",{pre:!0},[s._v("to")]),s._v(" 的值传到 "),a("code",{pre:!0},[s._v("router.push()")]),s._v("，所以这个值可以是一个字符串或者是描述目标位置的对象。")]),a("td",[s._v("String/Object")]),a("td",[s._v("-")]),a("td",[s._v("-")])]),a("tr",[a("td",[s._v("tag")]),a("td",[s._v("有时候想要 "),a("code",{pre:!0},[s._v("<router-link>")]),s._v(" 渲染成某种标签，例如 "),a("code",{pre:!0},[s._v("<li>")]),s._v("。 于是我们使用 "),a("code",{pre:!0},[s._v("tag prop")]),s._v(" 类指定何种标签，同样它还是会监听点击，触发导航。")]),a("td",[s._v("String")]),a("td",[s._v("-")]),a("td",[s._v("-")])]),a("tr",[a("td",[s._v("active-class")]),a("td",[s._v("设置 链接激活时使用的 CSS 类名。默认值可以通过路由的构造选项 "),a("code",{pre:!0},[s._v("linkActiveClass")]),s._v(" 来全局配置。")]),a("td",[s._v("String")]),a("td",[s._v("-")]),a("td",[s._v("-")])]),a("tr",[a("td",[s._v("event")]),a("td",[s._v("声明可以用来触发导航的事件。可以是一个字符串或是一个包含字符串的数组")]),a("td",[s._v("String/Array")]),a("td",[s._v("—")]),a("td",[s._v("click")])]),a("tr",[a("td",[s._v("exact")]),a("td",[s._v("“是否激活” 默认类名的依据是 "),a("strong",[s._v("inclusive match")]),s._v(" （全包含匹配）。 举个例子，如果当前的路径是 "),a("code",{pre:!0},[s._v("/a")]),s._v(" 开头的，那么 "),a("code",{pre:!0},[s._v('<router-link to="/a">')]),s._v(" 也会被设置 CSS 类名。")]),a("td",[s._v("Boolean")]),a("td",[s._v("—")]),a("td",[s._v("—")])]),a("tr",[a("td",[s._v("exact-active-class")]),a("td",[s._v("配置当链接被精确匹配的时候应该激活的 class。注意默认值也是可以通过路由构造函数选项 linkExactActiveClass 进行全局配置的。")]),a("td",[s._v("String")]),a("td",[s._v("—")]),a("td",[s._v("router-link-exact-active")])]),a("tr",[a("td",[s._v("append")]),a("td",[s._v("设置 "),a("code",{pre:!0},[s._v("append")]),s._v(" 属性后，则在当前（相对）路径前添加基路径。例如，我们从 "),a("code",{pre:!0},[s._v("/a")]),s._v(" 导航到一个相对路径 b，如果没有配置 append，则路径为 /b，如果配了，则为 /a/b")]),a("td",[s._v("Boolean")]),a("td",[s._v("—")]),a("td",[s._v("false")])]),a("tr",[a("td",[s._v("replace")]),a("td",[s._v("设置 "),a("code",{pre:!0},[s._v("replace")]),s._v(" 属性的话，当点击时，会调用 "),a("code",{pre:!0},[s._v("router.replace()")]),s._v(" 而不是 "),a("code",{pre:!0},[s._v("router.push()")]),s._v("，于是导航后不会留下 history 记录。")]),a("td",[s._v("Boolean")]),a("td",[s._v("—")]),a("td",[s._v("false")])])])])}],n={data:function(){return{items:[{text:"Dashboard",disabled:!1},{text:"Link 1",disabled:!1},{text:"Link 2",disabled:!0}]}}},l=n,v=a("KHd+"),_=Object(v["a"])(l,r,e,!1,null,null,null);t["default"]=_.exports}}]);