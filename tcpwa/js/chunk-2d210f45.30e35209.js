(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d210f45"],{b9a9:function(e,n,t){"use strict";t.r(n);var s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"chip-demo"}},[t("chip-default"),t("chip-color"),t("chip-icon"),t("chip-closable"),t("chip-add-remove"),t("chip-customize-close-clear-chip-icon")],1)},c=[],a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("vx-card",{attrs:{title:"Default","code-toggler":""}},[t("p",[e._v("Helps you represent simple data with colorful options")]),t("div",{staticClass:"demo-alignment"},[t("vs-chip",[e._v("Basic Chip")]),t("vs-chip",[t("vs-avatar",{attrs:{text:"LD"}}),e._v("\n                Avatar Text\n            ")],1),t("vs-chip",[t("vs-avatar"),e._v("\n                Avatar Icon\n            ")],1),t("vs-chip",[t("vs-avatar",{attrs:{src:"https://randomuser.me/api/portraits/men/4.jpg"}}),e._v("\n                Avatar Image\n            ")],1),e.isDeleted?e._e():t("vs-chip",{attrs:{closable:""},on:{click:function(n){e.isDeleted=!0}}},[e._v("\n                Closable chip\n            ")])],1),t("template",{slot:"codeContainer"},[e._v('\n<template>\n  <div class="demo-alignment">\n\n    <vs-chip>Basic Chip</vs-chip>\n\n    <vs-chip>\n      <vs-avatar text="LD"/>\n      Avatar Text\n    </vs-chip>\n\n    <vs-chip>\n      <vs-avatar />\n      Avatar Icon\n    </vs-chip>\n\n    <vs-chip>\n      <vs-avatar src="https://randomuser.me/api/portraits/men/4.jpg"/>\n      Avatar Image\n    </vs-chip>\n\n    <vs-chip @click="isDeleted=true" v-if="!isDeleted" closable>\n      Closable chip\n    </vs-chip>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      isDeleted: false,\n    }\n  }\n}\n<\/script>\n        ')])],2)},i=[],r={data:function(){return{isDeleted:!1}}},o=r,l=t("2877"),p=Object(l["a"])(o,a,i,!1,null,null,null),h=p.exports,v=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("vx-card",{attrs:{title:"Color","code-toggler":""}},[t("p",[e._v("Change the background color of the chip")]),t("vs-alert",{staticClass:"my-3",attrs:{icon:"warning",active:"true",color:"warning"}},[t("span",[e._v("Only "),t("strong",[e._v("RGB")]),e._v(" and "),t("strong",[e._v("HEX")]),e._v(" colors are supported.")])]),t("div",{staticClass:"demo-alignment"},[t("vs-chip",{attrs:{color:"primary"}},[e._v("\n                Basic Chip\n            ")]),t("vs-chip",{attrs:{color:"success"}},[t("vs-avatar",{attrs:{text:"LD"}}),e._v("\n                Avatar Text\n            ")],1),t("vs-chip",{attrs:{color:"danger"}},[t("vs-avatar"),e._v("\n                Avatar Icon\n            ")],1),t("vs-chip",{attrs:{color:"warning"}},[t("vs-avatar",{attrs:{src:"https://randomuser.me/api/portraits/men/4.jpg"}}),e._v("\n                Avatar Image\n            ")],1),e.isDeleted?e._e():t("vs-chip",{attrs:{closable:"",color:"dark"},on:{click:function(n){e.isDeleted=!0}}},[e._v("\n                Closable chip\n            ")]),e.isDeleted2?e._e():t("vs-chip",{attrs:{closable:"",color:"#24c1a0","close-icon":"close"},on:{click:function(n){e.isDeleted2=!0}}},[t("vs-avatar",{attrs:{src:"https://randomuser.me/api/portraits/men/16.jpg"}}),e._v("\n                Closable chip\n            ")],1)],1),t("template",{slot:"codeContainer"},[e._v('\n<template>\n  <div class="demo-alignment">\n\n    <vs-chip color="primary">Basic Chip</vs-chip>\n\n    <vs-chip color="success">\n      <vs-avatar text="LD" />\n      Avatar Text\n    </vs-chip>\n\n    <vs-chip color="danger">\n      <vs-avatar />\n      Avatar Icon\n    </vs-chip>\n\n    <vs-chip color="warning">\n      <vs-avatar src="https://randomuser.me/api/portraits/men/4.jpg" />\n      Avatar Image\n    </vs-chip>\n\n    <vs-chip @click="isDeleted=true" v-if="!isDeleted" closable color="dark">\n      Closable chip\n    </vs-chip>\n\n    <vs-chip @click="isDeleted2=true" v-if="!isDeleted2" closable color="#24c1a0" close-icon="close">\n      <vs-avatar src="https://randomuser.me/api/portraits/men/16.jpg" />\n      Closable chip\n    </vs-chip>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      isDeleted: false,\n      isDeleted2: false,\n    }\n  }\n}\n<\/script>\n        ')])],2)},d=[],u={data:function(){return{isDeleted:!1,isDeleted2:!1}}},m=u,b=Object(l["a"])(m,v,d,!1,null,null,null),f=b.exports,_=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("vx-card",{attrs:{title:"Icon","code-toggler":""}},[t("p",[e._v("Add a nice icon to the chip")]),t("div",{staticClass:"demo-alignment"},[t("vs-chip",[t("vs-avatar",{attrs:{"icon-pack":"feather",icon:"icon-user"}}),t("span",[e._v("Icon Default")])],1),t("vs-chip",{attrs:{color:"primary"}},[t("vs-avatar",{attrs:{"icon-pack":"feather",icon:"icon-send"}}),t("span",[e._v("Icon send")])],1),t("vs-chip",{attrs:{color:"success"}},[t("vs-avatar",{attrs:{"icon-pack":"feather",icon:"icon-mail"}}),t("span",[e._v("Icon markunread")])],1),t("vs-chip",{attrs:{color:"danger"}},[t("vs-avatar",{attrs:{"icon-pack":"feather",icon:"icon-slash"}}),t("span",[e._v("Icon block")])],1),t("vs-chip",{attrs:{color:"warning"}},[t("vs-avatar",{attrs:{"icon-pack":"feather",icon:"icon-battery"}}),t("span",[e._v("Icon battery_alert")])],1),t("vs-chip",{attrs:{color:"dark"}},[t("vs-avatar",{attrs:{"icon-pack":"feather",icon:"icon-edit"}}),t("span",[e._v("Icon edit")])],1)],1),t("template",{slot:"codeContainer"},[e._v('\n<div class="demo-alignment">\n\n  <vs-chip>\n    <vs-avatar icon-pack="feather" icon="icon-user" />\n    <span>Icon Default</span>\n  </vs-chip>\n\n  <vs-chip color="primary">\n    <vs-avatar icon-pack="feather" icon="icon-send" />\n    <span>Icon send</span>\n  </vs-chip>\n\n  <vs-chip color="success">\n    <vs-avatar icon-pack="feather" icon="icon-mail" />\n    <span>Icon markunread</span>\n  </vs-chip>\n\n  <vs-chip color="danger">\n    <vs-avatar icon-pack="feather" icon="icon-slash" />\n    <span>Icon block</span>\n  </vs-chip>\n\n  <vs-chip color="warning">\n    <vs-avatar icon-pack="feather" icon="icon-battery" />\n    <span>Icon battery_alert</span>\n  </vs-chip>\n\n  <vs-chip color="dark">\n    <vs-avatar icon-pack="feather" icon="icon-edit" />\n    <span>Icon edit</span>\n  </vs-chip>\n</div>\n        ')])],2)},g=[],k={},C=Object(l["a"])(k,_,g,!1,null,null,null),x=C.exports,y=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("vx-card",{attrs:{title:"Closable","code-toggler":""}},[t("p",[e._v("For making a chip closable")]),t("div",{staticClass:"demo-alignment"},[0==e.chips.length?t("vs-button",{attrs:{type:"filled"},on:{click:e.reset}},[e._v("Reset Chips")]):e._e(),e._l(e.chips,(function(n,s){return t("vs-chip",{key:s,attrs:{closable:""},on:{click:function(t){return e.remove(n)}}},[e._v(" "+e._s(n)+" ")])}))],2),t("template",{slot:"codeContainer"},[e._v('\n<template>\n  <div class="demo-alignment">\n\n    <vs-button v-if="chips.length == 0" @click="reset" type="filled">Reset Chips</vs-button>\n    <vs-chip @click="remove(chip)" v-for="(chip, index) in chips" :key="index" closable> '+e._s("{{ chip }}")+"} </vs-chip>\n\n  </div>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      chips:[\n        'Dribbble',\n        'GitHub',\n        'Behance',\n        'Vuejs',\n        'Vuexy',\n      ],\n    }\n  },\n  methods: {\n    reset () {\n      this.chips = [\n        'Dribbble',\n        'GitHub',\n        'Behance',\n        'Vuejs',\n        'Vuexy',\n      ]\n    },\n    remove (item) {\n      this.chips.splice(this.chips.indexOf(item), 1)\n    }\n  }\n}\n<\/script>\n        ")])],2)},D=[],w={data:function(){return{chips:["Dribbble","GitHub","Behance","Vuejs","Vuexy"]}},methods:{reset:function(){this.chips=["Dribbble","GitHub","Behance","Vuejs","Vuexy"]},remove:function(e){this.chips.splice(this.chips.indexOf(e),1)}}},I=w,j=Object(l["a"])(I,y,D,!1,null,null,null),A=j.exports,V=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("vx-card",{attrs:{title:"Add and Remove Items","code-toggler":""}},[t("p",[e._v("You can add and remove chips with the "),t("code",[e._v("vs-chips")]),e._v(" component. For the main parameter, pass the "),t("code",[e._v("items")]),e._v(" property, which is an array representing each chip")]),t("div",{staticClass:"mt-5"},[t("div",{staticClass:"op-block mb-5"},[e._v(" "+e._s(e.chips)+" ")]),t("vs-chips",{attrs:{color:"rgb(145, 32, 159)",placeholder:"New Element"},model:{value:e.chips,callback:function(n){e.chips=n},expression:"chips"}},e._l(e.chips,(function(n,s){return t("vs-chip",{key:n+"-"+s,attrs:{closable:""},on:{click:function(t){return e.remove(n)}}},[e._v("\n                    "+e._s(n)+"\n                ")])})),1)],1),t("template",{slot:"codeContainer"},[e._v('\n<template>\n  <div class="op-block mb-4"> '+e._s("{{ chips }}")+' </div>\n  <vs-chips color="rgb(145, 32, 159)" placeholder="New Element" v-model="chips">\n    <vs-chip\n      :key="chip"\n      @click="remove(chip)"\n      v-for="chip in chips"\n      closable>\n      '+e._s("{{ chip }}")+"}\n    </vs-chip>\n  </vs-chips>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      chips:[\n        'Dribbble',\n        'GitHub',\n        'Behance',\n        'Vuejs',\n        'Vuexy',\n      ],\n    }\n  },\n  methods: {\n    remove (item) {\n      this.chips.splice(this.chips.indexOf(item), 1)\n    }\n  }\n}\n<\/script>\n        ")])],2)},O=[],B={data:function(){return{chips:["Dribbble","GitHub","Behance","Vuejs","Vuexy"]}},methods:{remove:function(e){this.chips.splice(this.chips.indexOf(e),1)}}},E=B,G=Object(l["a"])(E,V,O,!1,null,null,null),H=G.exports,$=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("vx-card",{attrs:{title:"Customize Close and Clear Chips Icons","code-toggler":""}},[t("p",[e._v("You can change the icons used for the close button and the clear button when using multiple chips with the "),t("code",[e._v("vs-chips")]),e._v(" component.")]),t("p",[e._v("For the main parameter, pass the "),t("code",[e._v("close-icon")]),e._v(" property, which is the close icon that appears on each chip. You can change the Clear Chips button with the "),t("code",[e._v("remove-icon")]),e._v(" property")]),t("vs-alert",{staticClass:"mt-5",attrs:{color:"primary",icon:"new_releases",active:"true"}},[t("p",[e._v("Vuesax uses the Google Material Icons font library by default. For a list of all available icons, visit the official "),t("a",{attrs:{href:"https://material.io/icons/",target:"_blank"}},[e._v("Material Icons page")]),e._v(".")]),t("p",[e._v("FontAwesome and other fonts library are supported. Simply use the icon-pack with fa or fas. You still need to include the Font Awesome icons in your project.")])]),t("div",{staticClass:"mt-5"},[t("div",{staticClass:"op-block mb-5"},[e._v(" "+e._s(e.chips)+" ")]),t("vs-chips",{attrs:{color:"rgb(145, 32, 159)",placeholder:"New Element","icon-pack":"feather","remove-icon":"icon-trash-2"},model:{value:e.chips,callback:function(n){e.chips=n},expression:"chips"}},e._l(e.chips,(function(n,s){return t("vs-chip",{key:n+"-"+s,attrs:{closable:"","icon-pack":"feather","close-icon":"icon-trash-2"},on:{click:function(t){return e.remove(n)}}},[e._v("\n                    "+e._s(n)+"\n                ")])})),1)],1),t("template",{slot:"codeContainer"},[e._v('\n<template>\n  <div class="op-block mb-4"> '+e._s("{{ chips }}")+' </div>\n  <vs-chips color="rgb(145, 32, 159)" placeholder="New Element" v-model="chips" icon-pack="feather" remove-icon="icon-trash-2">\n    <vs-chip\n      :key="chip"\n      @click="remove(chip)"\n      v-for="chip in chips"\n      closable\n      icon-pack="feather"\n      close-icon="icon-trash-2">\n      '+e._s("{{ chip }}")+"\n    </vs-chip>\n  </vs-chips>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      chips:[\n        'Dribbble',\n        'GitHub',\n        'Behance',\n        'Vuejs',\n        'Vuexy',\n      ],\n    }\n  },\n  methods: {\n    remove (item) {\n      this.chips.splice(this.chips.indexOf(item), 1)\n    }\n  }\n}\n<\/script>\n        ")])],2)},F=[],R={data:function(){return{chips:["Dribbble","GitHub","Behance","Vuejs","Vuexy"]}},methods:{remove:function(e){this.chips.splice(this.chips.indexOf(e),1)}}},L=R,N=Object(l["a"])(L,$,F,!1,null,null,null),T=N.exports,Y={components:{ChipDefault:h,ChipColor:f,ChipIcon:x,ChipClosable:A,ChipAddRemove:H,ChipCustomizeCloseClearChipIcon:T}},z=Y,J=Object(l["a"])(z,s,c,!1,null,null,null);n["default"]=J.exports}}]);
//# sourceMappingURL=chunk-2d210f45.30e35209.js.map