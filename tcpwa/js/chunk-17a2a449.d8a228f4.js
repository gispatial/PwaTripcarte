(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17a2a449"],{"0985":function(s,t,c){},de05:function(s,t,c){"use strict";var n=c("0985"),l=c.n(n);l.a},df64:function(s,t,c){"use strict";c.r(t);var n=function(){var s=this,t=s.$createElement,c=s._self._c||t;return c("div",{attrs:{id:"form-element-switch-demo"}},[c("switch-state"),c("switch-color"),c("switch-text"),c("switch-icons"),c("switch-array-value")],1)},l=[],e=function(){var s=this,t=s.$createElement,c=s._self._c||t;return c("vx-card",{attrs:{title:"State","code-toggler":""}},[c("p",[s._v("To implement a switch element in the application, we add the component "),c("code",[s._v("vs-switch")])]),c("ul",{staticClass:"demo-alignment"},[c("li",[c("label",[s._v("true / active")]),c("vs-switch",{model:{value:s.switch1,callback:function(t){s.switch1=t},expression:"switch1"}})],1),c("li",[c("label",[s._v("false / inactive")]),c("vs-switch",{model:{value:s.switch2,callback:function(t){s.switch2=t},expression:"switch2"}})],1),c("li",[c("label",[s._v("disabled / active")]),c("vs-switch",{attrs:{disabled:"true"},model:{value:s.switch3,callback:function(t){s.switch3=t},expression:"switch3"}})],1),c("li",[c("label",[s._v("disabled / inactive")]),c("vs-switch",{attrs:{disabled:"true"},model:{value:s.switch4,callback:function(t){s.switch4=t},expression:"switch4"}})],1)]),c("template",{slot:"codeContainer"},[s._v('\n<template lang="html">\n  <ul class="switch-container">\n    <li>\n      <label>true / active</label>\n      <vs-switch v-model="switch1" />\n    </li>\n    <li>\n      <label>false / inactive</label>\n      <vs-switch v-model="switch2" />\n    </li>\n    <li>\n      <label>disabled / active</label>\n      <vs-switch disabled="true" v-model="switch3" />\n    </li>\n    <li>\n      <label>disabled / inactive</label>\n      <vs-switch disabled="true" v-model="switch4" />\n    </li>\n  </ul>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      switch1:true,\n      switch2:false,\n      switch3:true,\n      switch4:false,\n    }\n  }\n}\n<\/script>\n        ')])],2)},i=[],o={data:function(){return{switch1:!0,switch2:!1,switch3:!0,switch4:!1}}},a=o,r=c("2877"),h=Object(r["a"])(a,e,i,!1,null,null,null),v=h.exports,w=function(){var s=this,t=s.$createElement,c=s._self._c||t;return c("vx-card",{attrs:{title:"Color","code-toggler":""}},[c("span",[s._v("You can choose the default "),c("strong",[s._v("Switch")]),s._v(". You are able to use the Main Colors or "),c("strong",[s._v("RGB")]),s._v(" and "),c("strong",[s._v("HEX")]),s._v(" colors.")]),c("vs-alert",{staticClass:"mt-5",attrs:{icon:"warning",active:"true",color:"warning"}},[c("span",[s._v("Only "),c("strong",[s._v("RGB")]),s._v(" and "),c("strong",[s._v("HEX")]),s._v(" colors are supported.")])]),c("ul",{staticClass:"demo-alignment"},[c("li",[c("label",[s._v("Primary")]),c("vs-switch",{model:{value:s.switch1,callback:function(t){s.switch1=t},expression:"switch1"}})],1),c("li",[c("label",[s._v("Success")]),c("vs-switch",{attrs:{color:"success"},model:{value:s.switch2,callback:function(t){s.switch2=t},expression:"switch2"}})],1),c("li",[c("label",[s._v("Danger")]),c("vs-switch",{attrs:{color:"danger"},model:{value:s.switch3,callback:function(t){s.switch3=t},expression:"switch3"}})],1),c("li",[c("label",[s._v("Warning")]),c("vs-switch",{attrs:{color:"warning"},model:{value:s.switch4,callback:function(t){s.switch4=t},expression:"switch4"}})],1),c("li",[c("label",[s._v("Dark")]),c("vs-switch",{attrs:{color:"dark"},model:{value:s.switch5,callback:function(t){s.switch5=t},expression:"switch5"}})],1),c("li",{staticClass:"con-input-color"},[c("label",[s._v("Color: "),c("span",[s._v(s._s(s.color))])]),c("vs-switch",{attrs:{color:s.color},model:{value:s.switch6,callback:function(t){s.switch6=t},expression:"switch6"}})],1),c("li",{staticStyle:{"align-self":"flex-end"}},[c("input",{directives:[{name:"model",rawName:"v-model",value:s.color,expression:"color"}],attrs:{type:"color"},domProps:{value:s.color},on:{input:function(t){t.target.composing||(s.color=t.target.value)}}})])]),c("template",{slot:"codeContainer"},[s._v('\n<template lang="html">\n  <ul class="con-s">\n    <li>\n      <label>Primary</label>\n      <vs-switch v-model="switch1" />\n    </li>\n    <li>\n      <label>Success</label>\n      <vs-switch color="success" v-model="switch2" />\n    </li>\n    <li>\n      <label>Danger</label>\n      <vs-switch color="danger" v-model="switch3" />\n    </li>\n    <li>\n      <label>Warning</label>\n      <vs-switch color="warning" v-model="switch4" />\n    </li>\n    <li>\n      <label>Dark</label>\n      <vs-switch color="dark" v-model="switch5" />\n    </li>\n    <li class="con-input-color">\n      <label>Color: <span>'+s._s(s.color)+'</span></label>\n      <input v-model="color" type="color">\n      <vs-switch :color="color" v-model="switch6" />\n    </li>\n  </ul>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      color:\'#5a3cc4\',\n      switch1:true,\n      switch2:true,\n      switch3:true,\n      switch4:true,\n      switch5:true,\n      switch6:true,\n    }\n  }\n}\n<\/script>\n        ')])],2)},u=[],p={data:function(){return{color:"#5a3cc4",switch1:!0,switch2:!0,switch3:!0,switch4:!0,switch5:!0,switch6:!0}}},d=p,f=Object(r["a"])(d,w,u,!1,null,null,null),m=f.exports,b=function(){var s=this,t=s.$createElement,c=s._self._c||t;return c("vx-card",{attrs:{title:"Text","code-toggler":""}},[c("span",[s._v("You can add a descriptive text with the slot "),c("code",[s._v("on")]),s._v(" or "),c("code",[s._v("off")]),s._v(". You can also join the text with the icons.")]),c("ul",{staticClass:"demo-alignment"},[c("li",[c("vs-switch",{model:{value:s.switch1,callback:function(t){s.switch1=t},expression:"switch1"}},[c("span",{attrs:{slot:"on"},slot:"on"},[s._v("On")]),c("span",{attrs:{slot:"off"},slot:"off"},[s._v("Off")])])],1),c("li",[c("vs-switch",{attrs:{color:"success"},model:{value:s.switch2,callback:function(t){s.switch2=t},expression:"switch2"}},[c("span",{attrs:{slot:"on"},slot:"on"},[s._v("Accept")]),c("span",{attrs:{slot:"off"},slot:"off"},[s._v("Cancel")])])],1),c("li",[c("vs-switch",{attrs:{color:"danger","vs-icon-off":"close"},model:{value:s.switch3,callback:function(t){s.switch3=t},expression:"switch3"}},[c("span",{attrs:{slot:"on"},slot:"on"},[s._v("Remove")])])],1),c("li",[c("vs-switch",{attrs:{color:"warning","vs-icon-on":"error_outline"},model:{value:s.switch4,callback:function(t){s.switch4=t},expression:"switch4"}},[c("span",{attrs:{slot:"off"},slot:"off"},[s._v("Prevent")])])],1),c("li",[c("vs-switch",{attrs:{color:"dark","icon-pack":"feather","vs-icon-on":"icon-check-circle","vs-icon-off":"icon-slash"},model:{value:s.switch5,callback:function(t){s.switch5=t},expression:"switch5"}},[c("span",{attrs:{slot:"on"},slot:"on"},[s._v("YES")]),c("span",{attrs:{slot:"off"},slot:"off"},[s._v("NO")])])],1)]),c("template",{slot:"codeContainer"},[s._v('\n<template>\n  <ul class="con-s">\n    <li>\n      <vs-switch v-model="switch1">\n        <span slot="on">On</span>\n        <span slot="off">Off</span>\n      </vs-switch>\n    </li>\n    <li>\n      <vs-switch color="success" v-model="switch2">\n        <span slot="on">Accept</span>\n        <span slot="off">Cancel</span>\n      </vs-switch>\n    </li>\n    <li>\n      <vs-switch color="danger" vs-icon-off="close" v-model="switch3">\n        <span slot="on">Remove</span>\n      </vs-switch>\n    </li>\n    <li>\n      <vs-switch color="warning" vs-icon-on="error_outline" v-model="switch4">\n        <span slot="off">Prevent</span>\n      </vs-switch>\n    </li>\n    <li>\n      <vs-switch color="dark" icon-pack="feather" vs-icon-on="icon-check-circle" vs-icon-off="icon-slash" v-model="switch5">\n        <span slot="on">YES</span>\n        <span slot="off">NO</span>\n      </vs-switch>\n    </li>\n  </ul>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      switch1:true,\n      switch2:true,\n      switch3:true,\n      switch4:true,\n      switch5:true,\n    }\n  }\n}\n<\/script>\n        ')])],2)},_=[],k={data:function(){return{switch1:!0,switch2:!0,switch3:!0,switch4:!0,switch5:!0}}},g=k,x=Object(r["a"])(g,b,_,!1,null,null,null),y=x.exports,A=function(){var s=this,t=s.$createElement,c=s._self._c||t;return c("vx-card",{attrs:{title:"Icons","code-toggler":""}},[c("p",[s._v("We can add a representative icon inside our switch with the property "),c("code",[s._v("vs-icon")]),s._v(".")]),c("p",[s._v("If you only need to add the icon in one of the states you can do it with the property "),c("code",[s._v("vs-icon-on")]),s._v(" or "),c("code",[s._v("vs-icon-off")])]),c("vs-alert",{staticClass:"mt-5",attrs:{color:"primary",icon:"new_releases",active:"true"}},[c("span",[s._v("Vuesax uses the "),c("strong",[s._v("Google Material Icons")]),s._v(" font library. For a list of all available icons, visit the official "),c("a",{attrs:{href:"https://material.io/icons/",target:"_blank"}},[s._v("Material Icons page.")])])]),c("ul",{staticClass:"demo-alignment"},[c("li",[c("label",[s._v("Primary")]),c("vs-switch",{attrs:{"icon-pack":"feather","vs-icon-off":"icon-bell","vs-icon-on":"icon-check"},model:{value:s.switch1,callback:function(t){s.switch1=t},expression:"switch1"}})],1),c("li",[c("label",[s._v("Success")]),c("vs-switch",{attrs:{color:"success","icon-pack":"feather","vs-icon":"icon-check"},model:{value:s.switch2,callback:function(t){s.switch2=t},expression:"switch2"}})],1),c("li",[c("label",[s._v("Danger")]),c("vs-switch",{attrs:{color:"danger","icon-pack":"feather","vs-icon":"icon-x"},model:{value:s.switch3,callback:function(t){s.switch3=t},expression:"switch3"}})],1),c("li",[c("label",[s._v("Warning")]),c("vs-switch",{attrs:{color:"warning","icon-pack":"feather","vs-icon":"icon-alert-circle"},model:{value:s.switch4,callback:function(t){s.switch4=t},expression:"switch4"}})],1),c("li",[c("label",[s._v("Dark")]),c("vs-switch",{attrs:{color:"dark","icon-pack":"feather","vs-icon":"icon-volume-x"},model:{value:s.switch5,callback:function(t){s.switch5=t},expression:"switch5"}})],1),c("li",[c("label",[s._v("rgb(color) / #color")]),c("vs-switch",{attrs:{color:"rgb(51, 53, 83)","icon-pack":"feather","vs-icon":"icon-camera"},model:{value:s.switch6,callback:function(t){s.switch6=t},expression:"switch6"}})],1)]),c("template",{slot:"codeContainer"},[s._v('\n<template>\n    <ul class="demo-alignment">\n        <li>\n            <label>Primary</label>\n            <vs-switch v-model="switch1" icon-pack="feather" vs-icon-off="icon-bell" vs-icon-on="icon-check" />\n        </li>\n        <li>\n            <label>Success</label>\n            <vs-switch color="success" v-model="switch2" icon-pack="feather" vs-icon="icon-check" />\n        </li>\n        <li>\n            <label>Danger</label>\n            <vs-switch color="danger" v-model="switch3" icon-pack="feather" vs-icon="icon-x" />\n        </li>\n        <li>\n            <label>Warning</label>\n            <vs-switch color="warning" v-model="switch4" icon-pack="feather" vs-icon="icon-alert-circle" />\n        </li>\n        <li>\n            <label>Dark</label>\n            <vs-switch color="dark" v-model="switch5" icon-pack="feather" vs-icon="icon-volume-x" />\n        </li>\n        <li>\n            <label>rgb(color) / #color</label>\n            <vs-switch color="rgb(51, 53, 83)" v-model="switch6" icon-pack="feather" vs-icon="icon-camera" />\n        </li>\n    </ul>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      switch1:false,\n      switch2:false,\n      switch3:false,\n      switch4:false,\n      switch5:false,\n      switch6:false\n    }\n  }\n}\n<\/script>\n        ')])],2)},C=[],S={data:function(){return{switch1:!1,switch2:!1,switch3:!1,switch4:!1,switch5:!1,switch6:!1}}},O=S,E=Object(r["a"])(O,A,C,!1,null,null,null),D=E.exports,j=function(){var s=this,t=s.$createElement,c=s._self._c||t;return c("vx-card",{attrs:{title:"Array Value","code-toggler":""}},[c("span",[s._v("For saving the values in an array, you could simply pass it as a value.")]),c("vs-alert",{staticClass:"mt-5",attrs:{icon:"warning",active:"true",color:"warning"}},[c("span",[s._v("For using an array as a value, we need to use the "),c("code",[s._v("vs-value")]),s._v(" property inside the switch component. That is the value that will be added to the array.")])]),c("ul",{staticClass:"demo-alignment"},[c("li",[c("vs-switch",{attrs:{"vs-icon-on":"check",color:"success","vs-value":"luis"},model:{value:s.switchArray,callback:function(t){s.switchArray=t},expression:"switchArray"}},[c("span",{attrs:{slot:"off"},slot:"off"},[s._v("Luis")])])],1),c("li",[c("vs-switch",{attrs:{"vs-icon-on":"check",color:"success","vs-value":"carols"},model:{value:s.switchArray,callback:function(t){s.switchArray=t},expression:"switchArray"}},[c("span",{attrs:{slot:"off"},slot:"off"},[s._v("Carols")])])],1),c("li",[c("vs-switch",{attrs:{"vs-icon-on":"check",color:"success","vs-value":"summer"},model:{value:s.switchArray,callback:function(t){s.switchArray=t},expression:"switchArray"}},[c("span",{attrs:{slot:"off"},slot:"off"},[s._v("Summer")])])],1),c("li",[c("vs-switch",{attrs:{"vs-icon-on":"check",color:"success","vs-value":"lyon"},model:{value:s.switchArray,callback:function(t){s.switchArray=t},expression:"switchArray"}},[c("span",{attrs:{slot:"off"},slot:"off"},[s._v("Lyon")])])],1)]),c("p",{staticClass:"op-block mt-5"},[s._v(s._s(s.switchArray))]),c("template",{slot:"codeContainer"},[s._v('\n<template>\n  <ul class="con-s">\n    <li class="modelx">\n      '+s._s("{{ switchArray }}")+'\n    </li>\n    <li>\n      <vs-switch vs-icon-on="check" color="success" v-model="switchArray" vs-value="luis">\n        <span slot="off">Luis</span>\n      </vs-switch>\n    </li>\n    <li>\n      <vs-switch vs-icon-on="check" color="success" v-model="switchArray" vs-value="carols">\n        <span slot="off">Carols</span>\n      </vs-switch>\n    </li>\n    <li>\n      <vs-switch vs-icon-on="check" color="success" v-model="switchArray" vs-value="summer">\n        <span slot="off">Summer</span>\n      </vs-switch>\n    </li>\n    <li>\n      <vs-switch vs-icon-on="check" color="success" v-model="switchArray" vs-value="lyon">\n        <span slot="off">Lyon</span>\n      </vs-switch>\n    </li>\n  </ul>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      switchArray:[\'luis\'],\n    }\n  }\n}\n<\/script>\n        ')])],2)},P=[],Y={data:function(){return{switchArray:["luis"]}}},$=Y,I=Object(r["a"])($,j,P,!1,null,null,null),W=I.exports,L={components:{SwitchState:v,SwitchColor:m,SwitchText:y,SwitchIcons:D,SwitchArrayValue:W}},R=L,T=(c("de05"),Object(r["a"])(R,n,l,!1,null,null,null));t["default"]=T.exports}}]);
//# sourceMappingURL=chunk-17a2a449.d8a228f4.js.map