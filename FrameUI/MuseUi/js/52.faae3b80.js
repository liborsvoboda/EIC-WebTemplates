(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[52],{fW5H:function(s,t,a){"use strict";a.r(t);var l=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"markdown-body"},[a("h1",[s._v("对话框")]),s._m(0),s._m(1),a("p",[s._v("点击对话框之外，或者按下后退，点击关闭按钮即可关闭对话框。")]),a("demo-block",{attrs:{jsfiddle:{html:'<mu-container>\n  <mu-flex justify-content="center">\n    <mu-button @click="openSimpleDialog">Open Dialog</mu-button>\n  </mu-flex>\n  <mu-dialog title="Dialog" width="360" :open.sync="openSimple">\n    this is simple Dialog\n    <mu-button slot="actions" flat color="primary" @click="closeSimpleDialog">Close</mu-button>\n  </mu-dialog>\n<mu-container>\n\n</mu-container></mu-container>',script:"\nexport default {\n  data () {\n    return {\n      openSimple: false\n    };\n  },\n  methods: {\n    openSimpleDialog () {\n      this.openSimple = true;\n    },\n    closeSimpleDialog () {\n      this.openSimple = false;\n    }\n  }\n};\n",style:null}}},[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[a("mu-container",[a("mu-flex",{attrs:{"justify-content":"center"}},[a("mu-button",{on:{click:s.openSimpleDialog}},[s._v("Open Dialog")])],1),a("mu-dialog",{attrs:{title:"Dialog",width:"360",open:s.openSimple},on:{"update:open":function(t){s.openSimple=t}}},[s._v("\n    this is simple Dialog\n    "),a("mu-button",{attrs:{slot:"actions",flat:"",color:"primary"},on:{click:s.closeSimpleDialog},slot:"actions"},[s._v("Close")])],1),a("mu-container")],1)],1),a("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0,attrs:{class:"hljs"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-container")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-flex")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("justify-content")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"center"')]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"openSimpleDialog"')]),s._v(">")]),s._v("Open Dialog"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-button")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-flex")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-dialog")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"Dialog"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("width")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"360"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":open.sync")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"openSimple"')]),s._v(">")]),s._v("\n    this is simple Dialog\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"actions"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("flat")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"closeSimpleDialog"')]),s._v(">")]),s._v("Close"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-button")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-dialog")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-container")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data () {\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("openSimple")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n    };\n  },\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    openSimpleDialog () {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".openSimple = "),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(";\n    },\n    closeSimpleDialog () {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".openSimple = "),a("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(";\n    }\n  }\n};\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),s._m(2),s._m(3),a("demo-block",{attrs:{jsfiddle:{html:'<mu-container>\n  <mu-flex justify-content="center">\n    <mu-button @click="openAlertDialog">Open Dialog</mu-button>\n  </mu-flex>\n  <mu-dialog title="Use Google\'s location service?" width="600" max-width="80%" :esc-press-close="false" :overlay-close="false" :open.sync="openAlert">\n    Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.\n    <mu-button slot="actions" flat color="primary" @click="closeAlertDialog">Disagree</mu-button>\n    <mu-button slot="actions" flat color="primary" @click="closeAlertDialog">Agree</mu-button>\n  </mu-dialog>\n<mu-container>\n\n</mu-container></mu-container>',script:"\nexport default {\n  data () {\n    return {\n      openAlert: false\n    };\n  },\n  methods: {\n    openAlertDialog () {\n      this.openAlert = true;\n    },\n    closeAlertDialog () {\n      this.openAlert = false;\n    }\n  }\n};\n",style:null}}},[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[a("mu-container",[a("mu-flex",{attrs:{"justify-content":"center"}},[a("mu-button",{on:{click:s.openAlertDialog}},[s._v("Open Dialog")])],1),a("mu-dialog",{attrs:{title:"Use Google's location service?",width:"600","max-width":"80%","esc-press-close":!1,"overlay-close":!1,open:s.openAlert},on:{"update:open":function(t){s.openAlert=t}}},[s._v("\n    Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.\n    "),a("mu-button",{attrs:{slot:"actions",flat:"",color:"primary"},on:{click:s.closeAlertDialog},slot:"actions"},[s._v("Disagree")]),a("mu-button",{attrs:{slot:"actions",flat:"",color:"primary"},on:{click:s.closeAlertDialog},slot:"actions"},[s._v("Agree")])],1),a("mu-container")],1)],1),a("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0,attrs:{class:"hljs"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-container")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-flex")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("justify-content")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"center"')]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"openAlertDialog"')]),s._v(">")]),s._v("Open Dialog"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-button")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-flex")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-dialog")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"Use Google\'s location service?"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("width")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"600"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("max-width")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"80%"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":esc-press-close")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"false"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":overlay-close")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"false"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":open.sync")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"openAlert"')]),s._v(">")]),s._v("\n    Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"actions"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("flat")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"closeAlertDialog"')]),s._v(">")]),s._v("Disagree"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-button")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"actions"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("flat")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"closeAlertDialog"')]),s._v(">")]),s._v("Agree"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-button")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-dialog")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-container")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data () {\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("openAlert")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n    };\n  },\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    openAlertDialog () {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".openAlert = "),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(";\n    },\n    closeAlertDialog () {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".openAlert = "),a("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(";\n    }\n  }\n};\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),s._m(4),a("demo-block",{attrs:{jsfiddle:{html:'<mu-container>\n  <mu-flex justify-content="center">\n    <mu-button @click="openScrollDialog">Open Scroll Dialog</mu-button>\n  </mu-flex>\n  <mu-dialog title="Phone Ringtone" width="360" scrollable :open.sync="openScroll">\n    <mu-list>\n      <mu-list-item :key="option" v-for="option in options">\n        <mu-list-item-content>\n          <mu-radio :label="option" :value="option" v-model="ringtone"></mu-radio>\n        </mu-list-item-content>\n      </mu-list-item>\n    </mu-list>\n    <mu-button slot="actions" flat color="primary" @click="closeScrollDialog">ok</mu-button>\n  </mu-dialog>\n<mu-container>\n\n</mu-container></mu-container>',script:"\nexport default {\n  data () {\n    return {\n      openScroll: false,\n      ringtone: 'None',\n      options: [\n        'None',\n        'Atria',\n        'Callisto',\n        'Dione',\n        'Ganymede',\n        'Hangouts Call',\n        'Luna',\n        'Oberon',\n        'Phobos',\n        'Pyxis',\n        'Sedna',\n        'Titania',\n        'Triton',\n        'Umbriel'\n    ]\n    };\n  },\n  methods: {\n    openScrollDialog () {\n      this.openScroll = true;\n    },\n    closeScrollDialog () {\n      this.openScroll = false;\n    }\n  }\n};\n",style:null}}},[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[a("mu-container",[a("mu-flex",{attrs:{"justify-content":"center"}},[a("mu-button",{on:{click:s.openScrollDialog}},[s._v("Open Scroll Dialog")])],1),a("mu-dialog",{attrs:{title:"Phone Ringtone",width:"360",scrollable:"",open:s.openScroll},on:{"update:open":function(t){s.openScroll=t}}},[a("mu-list",s._l(s.options,function(t){return a("mu-list-item",{key:t},[a("mu-list-item-content",[a("mu-radio",{attrs:{label:t,value:t},model:{value:s.ringtone,callback:function(t){s.ringtone=t},expression:"ringtone"}})],1)],1)})),a("mu-button",{attrs:{slot:"actions",flat:"",color:"primary"},on:{click:s.closeScrollDialog},slot:"actions"},[s._v("ok")])],1),a("mu-container")],1)],1),a("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0,attrs:{class:"hljs"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-container")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-flex")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("justify-content")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"center"')]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"openScrollDialog"')]),s._v(">")]),s._v("Open Scroll Dialog"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-button")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-flex")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-dialog")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"Phone Ringtone"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("width")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"360"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("scrollable")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":open.sync")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"openScroll"')]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-list")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-list-item")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":key")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"option"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"option in options"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-list-item-content")]),s._v(">")]),s._v("\n          "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-radio")]),s._v("  "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":label")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"option"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"option"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"ringtone"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-radio")]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-list-item-content")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-list-item")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-list")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"actions"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("flat")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"closeScrollDialog"')]),s._v(">")]),s._v("ok"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-button")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-dialog")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-container")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data () {\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("openScroll")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("ringtone")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'None'")]),s._v(",\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": [\n        "),a("span",{attrs:{class:"hljs-string"}},[s._v("'None'")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Atria'")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Callisto'")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Dione'")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Ganymede'")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Hangouts Call'")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Luna'")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Oberon'")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Phobos'")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Pyxis'")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Sedna'")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Titania'")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Triton'")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-string"}},[s._v("'Umbriel'")]),s._v("\n    ]\n    };\n  },\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    openScrollDialog () {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".openScroll = "),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(";\n    },\n    closeScrollDialog () {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".openScroll = "),a("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(";\n    }\n  }\n};\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),s._m(5),a("demo-block",{attrs:{jsfiddle:{html:'<mu-container>\n  <mu-flex justify-content="center">\n    <mu-button @click="openFullscreenDialog">Open Scroll Dialog</mu-button>\n  </mu-flex>\n  <mu-dialog width="360" transition="slide-bottom" fullscreen :open.sync="openFullscreen">\n    <mu-appbar color="primary" title="Fullscreen Diaolog">\n      <mu-button slot="left" icon @click="closeFullscreenDialog">\n        <mu-icon value="close"></mu-icon>\n      </mu-button>\n      <mu-button slot="right" flat @click="closeFullscreenDialog">\n        Done\n      </mu-button>\n    </mu-appbar>\n    <div style="padding: 24px;">\n      this is a fullscreen dialog\n    </div>\n  </mu-dialog>\n<mu-container>\n\n</mu-container></mu-container>',script:"\nexport default {\n  data () {\n    return {\n      openFullscreen: false\n    };\n  },\n  methods: {\n    openFullscreenDialog () {\n      this.openFullscreen = true;\n    },\n    closeFullscreenDialog () {\n      this.openFullscreen = false;\n    }\n  }\n};\n",style:null}}},[a("div",{staticClass:"source",attrs:{slot:"source"},slot:"source"},[a("mu-container",[a("mu-flex",{attrs:{"justify-content":"center"}},[a("mu-button",{on:{click:s.openFullscreenDialog}},[s._v("Open Scroll Dialog")])],1),a("mu-dialog",{attrs:{width:"360",transition:"slide-bottom",fullscreen:"",open:s.openFullscreen},on:{"update:open":function(t){s.openFullscreen=t}}},[a("mu-appbar",{attrs:{color:"primary",title:"Fullscreen Diaolog"}},[a("mu-button",{attrs:{slot:"left",icon:""},on:{click:s.closeFullscreenDialog},slot:"left"},[a("mu-icon",{attrs:{value:"close"}})],1),a("mu-button",{attrs:{slot:"right",flat:""},on:{click:s.closeFullscreenDialog},slot:"right"},[s._v("\n        Done\n      ")])],1),a("div",{staticStyle:{padding:"24px"}},[s._v("\n      this is a fullscreen dialog\n    ")])],1),a("mu-container")],1)],1),a("div",{staticClass:"highlight",attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0,attrs:{class:"hljs"}},[a("code",{attrs:{"v-pre":""}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-container")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-flex")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("justify-content")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"center"')]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"openFullscreenDialog"')]),s._v(">")]),s._v("Open Scroll Dialog"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-button")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-flex")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-dialog")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("width")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"360"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("transition")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"slide-bottom"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("fullscreen")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":open.sync")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"openFullscreen"')]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-appbar")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("color")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"Fullscreen Diaolog"')]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"left"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("icon")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"closeFullscreenDialog"')]),s._v(">")]),s._v("\n        "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-icon")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("value")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"close"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-icon")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-button")]),s._v(">")]),s._v("\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-button")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("slot")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"right"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("flat")]),s._v("  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"closeFullscreenDialog"')]),s._v(">")]),s._v("\n        Done\n      "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-button")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-appbar")]),s._v(">")]),s._v("\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"padding: 24px;"')]),s._v(">")]),s._v("\n      this is a fullscreen dialog\n    "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-dialog")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("mu-container")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data () {\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("openFullscreen")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v("\n    };\n  },\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    openFullscreenDialog () {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".openFullscreen = "),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(";\n    },\n    closeFullscreenDialog () {\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".openFullscreen = "),a("span",{attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(";\n    }\n  }\n};\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),s._m(6),s._m(7),s._m(8),s._m(9)],1)},n=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[a("code",{pre:!0},[s._v("mu-dialog")]),s._v(" 用于提示用户作一些决定，或者是完成某个任务时需要的一些其它额外的信息。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("h2",{attrs:{id:"shi-li"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shi-li","aria-hidden":"true"}},[s._v("¶")]),s._v(" 示例")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("h2",{attrs:{id:"alerts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alerts","aria-hidden":"true"}},[s._v("¶")]),s._v(" Alerts")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("设置 "),a("code",{pre:!0},[s._v("overlay-close")]),s._v(" 和 "),a("code",{pre:!0},[s._v("esc-press-close")]),s._v(" 使点击对话框外部或按下后退不会关闭。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("h2",{attrs:{id:"ke-gun-dong-de-dui-hua-kuang"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ke-gun-dong-de-dui-hua-kuang","aria-hidden":"true"}},[s._v("¶")]),s._v(" 可滚动的对话框")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("h2",{attrs:{id:"quan-ping-dui-hua-kuang"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quan-ping-dui-hua-kuang","aria-hidden":"true"}},[s._v("¶")]),s._v(" 全屏对话框")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("h2",{attrs:{id:"dialog-props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dialog-props","aria-hidden":"true"}},[s._v("¶")]),s._v(" Dialog Props")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("参数")]),a("th",[s._v("介绍")]),a("th",[s._v("类型")]),a("th",[s._v("可选值")]),a("th",[s._v("默认值")])])]),a("tbody",[a("tr",[a("td",[s._v("open")]),a("td",[s._v("是否打开")]),a("td",[s._v("Boolean")]),a("td",[s._v("—")]),a("td",[s._v("false")])]),a("tr",[a("td",[s._v("title")]),a("td",[s._v("dialog 标题，可用 "),a("code",{pre:!0},[s._v('slot="title"')]),s._v(" 代替")]),a("td",[s._v("String")]),a("td",[s._v("—")]),a("td",[s._v("—")])]),a("tr",[a("td",[s._v("width")]),a("td",[s._v("dialog 宽度，默认是 "),a("code",{pre:!0},[s._v("auto")])]),a("td",[s._v("String,Number")]),a("td",[s._v("—")]),a("td",[s._v("—")])]),a("tr",[a("td",[s._v("max-width")]),a("td",[s._v("dialog 最大宽度")]),a("td",[s._v("String,Number")]),a("td",[s._v("—")]),a("td",[s._v("—")])]),a("tr",[a("td",[s._v("scrollable")]),a("td",[s._v("是否可以内部滚动")]),a("td",[s._v("Boolean")]),a("td",[s._v("false")]),a("td",[s._v("false")])]),a("tr",[a("td",[s._v("padding")]),a("td",[s._v("设置了scrollable之后，对话框距离底部和顶部的值")]),a("td",[s._v("Number")]),a("td",[s._v("-")]),a("td",[s._v("64")])]),a("tr",[a("td",[s._v("fullscreen")]),a("td",[s._v("是否是全屏")]),a("td",[s._v("Boolean")]),a("td",[s._v("false")]),a("td",[s._v("false")])]),a("tr",[a("td",[s._v("transition")]),a("td",[s._v("过渡动画方案")]),a("td",[s._v("String")]),a("td",[s._v("slide-top/slide-bottom/slide-left/slide-right/fade/scale")]),a("td",[s._v("scale")])]),a("tr",[a("td",[s._v("dialog-class")]),a("td",[s._v("dialog 样式")]),a("td",[s._v("String")]),a("td",[s._v("—")]),a("td",[s._v("—")])]),a("tr",[a("td",[s._v("overlay")]),a("td",[s._v("是否有遮盖层")]),a("td",[s._v("Boolean")]),a("td",[s._v("—")]),a("td",[s._v("true")])]),a("tr",[a("td",[s._v("overlay-close")]),a("td",[s._v("点击遮盖层是否可以关闭")]),a("td",[s._v("Boolean")]),a("td",[s._v("—")]),a("td",[s._v("true")])]),a("tr",[a("td",[s._v("overlay-opacity")]),a("td",[s._v("遮盖层的透明度")]),a("td",[s._v("Boolean")]),a("td",[s._v("—")]),a("td",[s._v("0.4")])]),a("tr",[a("td",[s._v("overlay-color")]),a("td",[s._v("遮盖层的颜色")]),a("td",[s._v("String")]),a("td",[s._v("—")]),a("td",[s._v("#000")])]),a("tr",[a("td",[s._v("esc-press-close")]),a("td",[s._v("按下 "),a("code",{pre:!0},[s._v("esc")]),s._v(" 键是否可以关闭")]),a("td",[s._v("Boolean")]),a("td",[s._v("—")]),a("td",[s._v("true")])]),a("tr",[a("td",[s._v("lock-scroll")]),a("td",[s._v("是否在 Dialog 出现时将 body 滚动锁定")]),a("td",[s._v("-")]),a("td",[s._v("true")]),a("td")]),a("tr",[a("td",[s._v("append-body")]),a("td",[s._v("弹出层是否添加到 body 元素后, 内部使用")]),a("td",[s._v("Boolean")]),a("td",[s._v("—")]),a("td",[s._v("true")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("h2",{attrs:{id:"dialog-events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dialog-events","aria-hidden":"true"}},[s._v("¶")]),s._v(" Dialog Events")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("名称")]),a("th",[s._v("介绍")]),a("th",[s._v("回调参数")])])]),a("tbody",[a("tr",[a("td",[s._v("close")]),a("td",[s._v("当点击遮盖层或者按 esc 键，需要关闭弹层时触发")]),a("td",[s._v("(reason) reason 关闭的原因  "),a("br"),a("code",{pre:!0},[s._v("overlay")]),s._v(" : 点击了遮盖层 "),a("br"),a("code",{pre:!0},[s._v("esc")]),s._v(" 按下 esc 键")])])])])}],r={data:function(){return{openSimple:!1,openAlert:!1,openScroll:!1,openFullscreen:!1,ringtone:"None",options:["None","Atria","Callisto","Dione","Ganymede","Hangouts Call","Luna","Oberon","Phobos","Pyxis","Sedna","Titania","Triton","Umbriel"]}},methods:{openSimpleDialog:function(){this.openSimple=!0},closeSimpleDialog:function(){this.openSimple=!1},openAlertDialog:function(){this.openAlert=!0},closeAlertDialog:function(){this.openAlert=!1},openScrollDialog:function(){this.openScroll=!0},closeScrollDialog:function(){this.openScroll=!1},openFullscreenDialog:function(){this.openFullscreen=!0},closeFullscreenDialog:function(){this.openFullscreen=!1}}},e=r,o=a("KHd+"),v=Object(o["a"])(e,l,n,!1,null,null,null);t["default"]=v.exports}}]);