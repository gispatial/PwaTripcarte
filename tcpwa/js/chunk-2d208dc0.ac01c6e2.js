(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d208dc0"],{a71e:function(t,o,n){"use strict";n.r(o);var e=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{attrs:{id:"notifications-demo"}},[n("p",{staticClass:"mb-4"},[t._v("Nice, simple, and interactive notifications")]),n("notifications-default"),n("notifications-position"),n("notifications-icon"),n("notifications-fixed-and-function-click"),n("notifications-time")],1)},i=[],c=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("vx-card",{attrs:{title:"Default","code-toggler":""}},[n("p",[t._v("To add a notification we have the global function "),n("code",[t._v("$vs.notify")]),t._v(". The first parameter is a "),n("code",[t._v("json")]),t._v(" with all the necessary attributes, or if we only want the standard notification we can only add a string with the text of the notification")]),n("div",{staticClass:"demo-alignment"},[n("vs-button",{attrs:{color:"primary",type:"flat"},on:{click:function(o){return t.$vs.notify({title:"Primary",text:"Lorem ipsum dolor sit amet, consectetur",color:"primary"})}}},[t._v("Notification Primary")]),n("vs-button",{attrs:{color:"success",type:"flat"},on:{click:function(o){return t.$vs.notify({title:"Success",text:"Lorem ipsum dolor sit amet, consectetur",color:"success"})}}},[t._v("Notification Success")]),n("vs-button",{attrs:{color:"danger",type:"flat"},on:{click:function(o){return t.$vs.notify({title:"Danger",text:"Lorem ipsum dolor sit amet, consectetur",color:"danger"})}}},[t._v("Notification Danger")]),n("vs-button",{attrs:{color:"warning",type:"flat"},on:{click:function(o){return t.$vs.notify({title:"Warning",text:"Lorem ipsum dolor sit amet, consectetur",color:"warning"})}}},[t._v("Notification Warning")]),n("vs-button",{attrs:{color:"dark",type:"flat"},on:{click:function(o){return t.$vs.notify({title:"dark",text:"Lorem ipsum dolor sit amet, consectetur",color:"dark"})}}},[t._v("Notification Dark")]),n("vs-button",{attrs:{color:"success",type:"gradient"},on:{click:function(o){return t.random()}}},[t._v("Notification Random Color")])],1),n("template",{slot:"codeContainer"},[t._v('\n<template>\n    <div class="demo-alignment">\n\n      <vs-button\n        @click="$vs.notify({\n          title:\'Primary\',\n          text:\'Lorem ipsum dolor sit amet, consectetur\',\n          color:\'primary\'})"\n        color="primary"\n        type="flat">Notification Primary</vs-button>\n\n      <vs-button\n        @click="$vs.notify({\n          title:\'Success\',\n          text:\'Lorem ipsum dolor sit amet, consectetur\',\n          color:\'success\'})"\n        color="success"\n        type="flat">Notification Success</vs-button>\n\n      <vs-button\n        @click="$vs.notify({\n          title:\'Danger\',\n          text:\'Lorem ipsum dolor sit amet, consectetur\',\n          color:\'danger\'})"\n        color="danger"\n        type="flat">Notification Danger</vs-button>\n\n      <vs-button\n        @click="$vs.notify({\n          title:\'Warning\',\n          text:\'Lorem ipsum dolor sit amet, consectetur\',\n          color:\'warning\'})"\n        color="warning"\n        type="flat">Notification Warning</vs-button>\n\n      <vs-button\n        @click="$vs.notify({\n          title:\'dark\',\n          text:\'Lorem ipsum dolor sit amet, consectetur\',\n          color:\'dark\'})"\n        color="dark"\n        type="flat">Notification Dark</vs-button>\n\n      <vs-button @click="random()" color="success" type="gradient">Notification Random Color</vs-button>\n    </div>\n</template>\n\n<script>\nexport default {\n  methods: {\n    random() {\n      function getRandomInt(min, max) {\n        return Math.floor(Math.random() * (max - min)) + min;\n      }\n      let color = `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`\n\n      this.$vs.notify({\n        title: \'Color\',\n        text: \'Lorem ipsum dolor sit amet, consectetur\',\n        color: color\n      })\n\n    },\n  }\n}\n<\/script>\n        ')])],2)},r=[],s={methods:{random:function(){function t(t,o){return Math.floor(Math.random()*(o-t))+t}var o="rgb(".concat(t(0,255),",").concat(t(0,255),",").concat(t(0,255),")");this.$vs.notify({title:"Color",text:"Lorem ipsum dolor sit amet, consectetur",color:o})}}},a=s,l=n("2877"),u=Object(l["a"])(a,c,r,!1,null,null,null),m=u.exports,f=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("vx-card",{attrs:{title:"Position","code-toggler":""}},[n("p",[t._v("We can change the place where the notification appears with the property position. A practical example would be: position: 'top-right'. The supported values are")]),n("vx-list",{staticClass:"mt-3",attrs:{list:t.listPosition}}),n("vs-alert",{staticClass:"mb-1",attrs:{icon:"warning",active:"true",color:"warning"}},[n("span",[t._v("The default notifications appear "),n("code",[t._v("bottom-right")]),t._v(", it is not necessary to add the position property if it is the desired position")])]),n("div",{staticClass:"demo-alignment"},[n("vs-button",{attrs:{color:"primary",type:"flat"},on:{click:function(o){return t.$vs.notify({title:"Position Default",text:"Lorem ipsum dolor sit amet, consectetur",color:"primary"})}}},[t._v("Position Default")]),n("vs-button",{attrs:{color:"success",type:"flat"},on:{click:function(o){return t.$vs.notify({title:"Position top-right",text:"Lorem ipsum dolor sit amet, consectetur",color:"success",position:"top-right"})}}},[t._v("Position Top Right")]),n("vs-button",{attrs:{color:"danger",type:"flat"},on:{click:function(o){return t.$vs.notify({title:"Position top-left",text:"Lorem ipsum dolor sit amet, consectetur",color:"danger",position:"top-left"})}}},[t._v("Position Top Left")]),n("vs-button",{attrs:{color:"warning",type:"flat"},on:{click:function(o){return t.$vs.notify({title:"Position bottom-left",text:"Lorem ipsum dolor sit amet, consectetur",color:"warning",position:"bottom-left"})}}},[t._v("Position Bottom Left")]),n("vs-button",{attrs:{color:"dark",type:"flat"},on:{click:function(o){return t.$vs.notify({title:"Position bottom-center",text:"Lorem ipsum dolor sit amet, consectetur",color:"dark",position:"bottom-center"})}}},[t._v(" Position Bottom Center")]),n("vs-button",{attrs:{color:"success",type:"gradient"},on:{click:function(o){return t.randomCenter()}}},[t._v("Position Top Center Random Color")])],1),n("template",{slot:"codeContainer"},[t._v("\n<template>\n  <div class=\"demo-alignment\">\n\n      <vs-button color=\"primary\" type=\"flat\"\n        @click=\"$vs.notify({\n          title:'Position Default',\n          text:'Lorem ipsum dolor sit amet, consectetur',\n          color:'primary'})\">Position Default</vs-button>\n\n      <vs-button color=\"success\" type=\"flat\"\n        @click=\"$vs.notify({\n          title:'Position top-right',\n          text:'Lorem ipsum dolor sit amet, consectetur',\n          color:'success',\n          position:'top-right'})\">Position Top Right</vs-button>\n\n      <vs-button color=\"danger\" type=\"flat\"\n        @click=\"$vs.notify({\n          title:'Position top-left',\n          text:'Lorem ipsum dolor sit amet, consectetur',\n          color:'danger',\n          position:'top-left'})\">Position Top Left</vs-button>\n\n      <vs-button color=\"warning\" type=\"flat\"\n        @click=\"$vs.notify({\n          title:'Position bottom-left',\n          text:'Lorem ipsum dolor sit amet, consectetur',\n          color:'warning',\n          position:'bottom-left'})\">Position Bottom Left</vs-button>\n\n      <vs-button color=\"dark\" type=\"flat\"\n        @click=\"$vs.notify({\n          title:'Position bottom-center',\n          text:'Lorem ipsum dolor sit amet, consectetur',\n          color:'dark',\n          position:'bottom-center'})\"> Position Bottom Center</vs-button>\n\n      <vs-button @click=\"randomCenter()\" color=\"success\" type=\"gradient\">Position Top Center Random Color</vs-button>\n  </div>\n</template>\n\n<script>\nexport default {\n  methods: {\n    randomCenter() {\n      function getRandomInt(min, max) {\n        return Math.floor(Math.random() * (max - min)) + min;\n      }\n      let color = `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`\n      this.$vs.notify({ title: 'Position top-center', text: 'Lorem ipsum dolor sit amet, consectetur', color: color, position: 'top-center' })\n    }\n  }\n}\n<\/script>\n        ")])],2)},p=[],d={data:function(){return{listPosition:["top-right","top-left","top-center","bottom-right","bottom-left"]}},methods:{randomCenter:function(){function t(t,o){return Math.floor(Math.random()*(o-t))+t}var o="rgb(".concat(t(0,255),",").concat(t(0,255),",").concat(t(0,255),")");this.$vs.notify({title:"Position top-center",text:"Lorem ipsum dolor sit amet, consectetur",color:o,position:"top-center"})}}},v=d,y=Object(l["a"])(v,f,p,!1,null,null,null),h=y.exports,k=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("vx-card",{attrs:{title:"Icon","code-toggler":""}},[n("p",[t._v("Notifications can include icons to improve the user experience and to construct a more pleasant and intuitive notification. To make this, use the "),n("code",[t._v("icon")]),t._v(" property. A practical example would be: "),n("code",[t._v("icon: 'chat'")])]),n("vs-alert",{staticClass:"mt-5",attrs:{color:"primary",icon:"new_releases",active:"true"}},[n("p",[t._v("Vuesax uses the Google Material Icons font library by default. For a list of all available icons, visit the official "),n("a",{attrs:{href:"https://material.io/icons/",target:"_blank"}},[t._v("Material Icons page")]),t._v(".")]),n("p",[t._v("FontAwesome and other fonts library are supported. Simply use the icon-pack with fa or fas. You still need to include the Font Awesome icons in your project.")])]),n("div",{staticClass:"demo-alignment"},[n("vs-button",{attrs:{color:"primary",type:"flat"},on:{click:function(o){return t.$vs.notify({title:"Icon mail",text:"Lorem ipsum dolor sit amet, consectetur",color:"primary",iconPack:"feather",icon:"icon-mail"})}}},[t._v("Icon Mail")]),n("vs-button",{attrs:{color:"success",type:"flat"},on:{click:function(o){return t.$vs.notify({title:"Icon mail",text:"Lorem ipsum dolor sit amet, consectetur",color:"success",iconPack:"feather",icon:"icon-check"})}}},[t._v("Icon check_box")]),n("vs-button",{attrs:{color:"danger",type:"flat"},on:{click:function(o){return t.$vs.notify({title:"Icon mail",text:"Lorem ipsum dolor sit amet, consectetur",color:"danger",iconPack:"feather",icon:"icon-heart"})}}},[t._v("Icon favorite")]),n("vs-button",{attrs:{color:"warning",type:"flat"},on:{click:function(o){return t.$vs.notify({title:"Icon mail",text:"Lorem ipsum dolor sit amet, consectetur",color:"warning",iconPack:"feather",icon:"icon-alert-circle"})}}},[t._v("Icon error")]),n("vs-button",{attrs:{color:"dark",type:"flat"},on:{click:function(o){return t.$vs.notify({title:"Icon mail",text:"Lorem ipsum dolor sit amet, consectetur",color:"dark",iconPack:"feather",icon:"icon-message-square"})}}},[t._v("Icon chat")]),n("vs-button",{attrs:{color:"success",type:"gradient"},on:{click:function(o){return t.randomIcon()}}},[t._v("Icon Random Color")])],1),n("template",{slot:"codeContainer"},[t._v("\n<template>\n  <div class=\"demo-alignment\">\n\n    <vs-button color=\"primary\" type=\"flat\"\n      @click=\"$vs.notify({\n        title:'Icon mail',\n        text:'Lorem ipsum dolor sit amet, consectetur',\n        color:'primary',\n        iconPack: 'feather',\n        icon:'icon-mail'})\">Icon Mail</vs-button>\n\n    <vs-button color=\"success\" type=\"flat\"\n      @click=\"$vs.notify({\n        title:'Icon mail',\n        text:'Lorem ipsum dolor sit amet, consectetur',\n        color:'success',\n        iconPack: 'feather',\n        icon:'icon-check'})\">Icon check_box</vs-button>\n\n    <vs-button color=\"danger\" type=\"flat\"\n      @click=\"$vs.notify({\n        title:'Icon mail',\n        text:'Lorem ipsum dolor sit amet, consectetur',\n        color:'danger',\n        iconPack: 'feather',\n        icon:'icon-heart'})\">Icon favorite</vs-button>\n\n    <vs-button color=\"warning\" type=\"flat\"\n      @click=\"$vs.notify({\n        title:'Icon mail',\n        text:'Lorem ipsum dolor sit amet, consectetur',\n        color:'warning',\n        iconPack: 'feather',\n        icon:'icon-alert-circle'})\">Icon error</vs-button>\n\n    <vs-button color=\"dark\" type=\"flat\"\n      @click=\"$vs.notify({\n        title:'Icon mail',\n        text:'Lorem ipsum dolor sit amet, consectetur',\n        color:'dark',\n        iconPack: 'feather',\n        icon:'icon-message-square'})\">Icon chat</vs-button>\n\n      <vs-button @click=\"randomIcon()\" color=\"success\" type=\"gradient\">Icon Random Color</vs-button>\n  </div>\n</template>\n\n<script>\nexport default {\n  methods: {\n    randomIcon() {\n      function getRandomInt(min, max) {\n        return Math.floor(Math.random() * (max - min)) + min;\n      }\n      let color = `rgb(${getRandomInt(0,255)},${getRandomInt(0,255)},${getRandomInt(0,255)})`\n\n      this.$vs.notify({ title: &apos;Icon mail&apos;, text: &apos;Lorem ipsum dolor sit amet, consectetur&apos;, color: color, icon: &apos;verified_user&apos; })\n    }\n  }\n}\n<\/script>\n    ")])],2)},b=[],g={methods:{randomIcon:function(){function t(t,o){return Math.floor(Math.random()*(o-t))+t}var o="rgb(".concat(t(0,255),",").concat(t(0,255),",").concat(t(0,255),")");this.$vs.notify({title:"Icon Award",text:"Lorem ipsum dolor sit amet, consectetur",color:o,icon:"icon-award",iconPack:"feather"})}}},x=g,_=Object(l["a"])(x,k,b,!1,null,null,null),$=_.exports,P=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("vx-card",{attrs:{title:"Fixed and function click","code-toggler":""}},[n("p",[t._v("Sometimes we need to execute a function when the user clicks on the notification. For this, pass a function to the click property. Example: "),n("code",[t._v("click:()=>{ ... }")])]),n("vs-button",{staticClass:"mt-4",attrs:{type:"gradient",color:"success"},on:{click:function(o){return t.myFunction()}}},[t._v("Run Example")]),n("template",{slot:"codeContainer"},[t._v("\n<template>\n  <vs-button @click=\"myFunction()\" type=\"gradient\" color=\"success\" class=\"my-4\">Run Example</vs-button>\n</template>\n\n<script>\nexport default {\n  methods: {\n    myFunction() {\n      this.$vs.notify({\n        title: 'Function click',\n        text: 'Click on me to execute function',\n        color: 'primary',\n        fixed: true,\n        click: () => {\n          // Secondary function\n          this.$vs.notify({\n            title: 'Secondary function',\n            text: 'Executed the function when clicking',\n            color: 'success',\n            iconPack: 'feather',\n            icon: 'icon-check'\n          })\n        },\n      })\n    },\n  }\n}\n<\/script>\n        ")])],2)},L=[],I={methods:{myFunction:function(){var t=this;this.$vs.notify({title:"Function click",text:"Click on me to execute function",color:"primary",fixed:!0,click:function(){t.$vs.notify({title:"Secondary function",text:"Executed the function when clicking",color:"success",iconPack:"feather",icon:"icon-check"})}})}}},w=I,C=Object(l["a"])(w,P,L,!1,null,null,null),T=C.exports,R=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("vx-card",{attrs:{title:"Time","code-toggler":""}},[n("p",[t._v("You can change the total time that the notification stays on the screen with the "),n("code",[t._v("time")]),t._v(" property. Example: "),n("code",[t._v("time: 4000")])]),n("vs-alert",{staticClass:"mt-5",attrs:{color:"primary",icon:"new_releases",active:"true"}},[n("p",[t._v("By default the notifications have a time of "),n("strong",[t._v("2000")]),t._v(" (2s)")])]),n("div",{staticClass:"demo-alignment"},[n("vs-button",{attrs:{color:"primary",type:"flat"},on:{click:function(o){return t.$vs.notify({title:"Time default",text:"Lorem ipsum dolor sit amet consectetur",color:"primary",iconPack:"feather",icon:"icon-clock"})}}},[t._v("Time default")]),n("vs-button",{attrs:{color:"primary",type:"flat"},on:{click:function(o){t.$vs.notify({time:4e3,title:"Time 4s (4000)",text:"Lorem ipsum dolor sit amet consectetur",color:"primary",iconPack:"feather",icon:"icon-clock"})}}},[t._v("Time 4s (4000)")]),n("vs-button",{attrs:{color:"primary",type:"flat"},on:{click:function(o){t.$vs.notify({time:8e3,title:"Time 8s (8000)",text:"Lorem ipsum dolor sit amet consectetur",color:"primary",iconPack:"feather",icon:"icon-clock"})}}},[t._v("Time 8s (8000)")])],1),n("template",{slot:"codeContainer"},[t._v("\n<template>\n  <div class=\"demo-alignment\">\n\n    <vs-button @click=\"$vs.notify({\n        title:'Time default',\n        text:'Lorem ipsum dolor sit amet consectetur',\n        color:'primary',\n        iconPack: 'feather',\n        icon: 'icon-clock'\n        })\" color=\"primary\" type=\"flat\">Time default</vs-button>\n\n    <vs-button @click=\"$vs.notify({\n        time:4000,\n        title:'Time 4s (4000)',\n        text:'Lorem ipsum dolor sit amet consectetur',\n        color:'primary',\n        iconPack: 'feather',\n        icon: 'icon-clock'\n        })\" color=\"primary\" type=\"flat\">Time 4s (4000)</vs-button>\n\n    <vs-button @click=\"$vs.notify({\n        time:8000,\n        title:'Time 8s (8000)',\n        text:'Lorem ipsum dolor sit amet consectetur',\n        color:'primary',\n        iconPack: 'feather',\n        icon: 'icon-clock'\n        })\" color=\"primary\" type=\"flat\">Time 8s (8000)</vs-button>\n  </div>\n</template>\n        ")])],2)},N=[],M={},F=Object(l["a"])(M,R,N,!1,null,null,null),D=F.exports,E={components:{NotificationsDefault:m,NotificationsPosition:h,NotificationsIcon:$,NotificationsFixedAndFunctionClick:T,NotificationsTime:D}},S=E,j=Object(l["a"])(S,e,i,!1,null,null,null);o["default"]=j.exports}}]);
//# sourceMappingURL=chunk-2d208dc0.ac01c6e2.js.map