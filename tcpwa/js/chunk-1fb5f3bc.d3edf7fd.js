(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1fb5f3bc"],{"36bd":function(t,e,o){"use strict";var a=o("4bf8"),r=o("77f1"),s=o("9def");t.exports=function(t){var e=a(this),o=s(e.length),i=arguments.length,n=r(i>1?arguments[1]:void 0,o),l=i>2?arguments[2]:void 0,d=void 0===l?o:r(l,o);while(d>n)e[n++]=t;return e}},"43ca":function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("vx-card",{staticClass:"overflow-hidden"},[o("div",{attrs:{slot:"no-body"},slot:"no-body"},[o("div",{staticClass:"p-6",class:{"flex justify-between flex-row-reverse items-center":t.iconRight,"text-center":!t.iconRight&&t.hideChart,"pb-0":!t.hideChart}},[o("feather-icon",{staticClass:"p-3 inline-flex rounded-full",class:["text-"+t.color,{"mb-4":!t.iconRight}],style:{background:"rgba(var(--vs-"+t.color+"),.15)"},attrs:{icon:t.icon}}),o("div",{staticClass:"truncate"},[o("h2",{staticClass:"mb-1 font-bold"},[t._v(t._s(t.statistic))]),o("span",[t._v(t._s(t.statisticTitle))])])],1),t.hideChart?t._e():o("div",{staticClass:"line-area-chart"},[o("vue-apex-charts",{ref:"apexChart",attrs:{type:t.type,height:"100",width:"100%",options:t.chartOptions,series:t.chartData}})],1)])])},r=[],s=(o("6c7b"),o("6b54"),o("28a5"),o("c5f6"),o("1321")),i=o.n(s),n={areaChartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.5,opacityTo:.2,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{show:!1}}},lineChartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{type:"line",dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1},toolbar:{show:!1},sparkline:{enabled:!0}},stroke:{width:5,curve:"smooth"},xaxis:{type:"numeric"},fill:{type:"gradient",gradient:{shade:"dark",shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},tooltip:{x:{show:!1}}}},l=o("ee53"),d={props:{icon:{type:String,required:!0},statistic:{type:[Number,String],required:!0},statisticTitle:{type:String},chartData:{},color:{type:String,default:"primary"},colorTo:{type:String},type:{type:String,default:"line"},iconRight:{type:Boolean,default:!1},hideChart:{type:Boolean,default:!1}},data:function(){return{chartOptions:null}},watch:{themePrimaryColor:function(){this.$refs.apexChart.updateOptions({theme:{monochrome:{color:this.getHex(this.color)}}})}},computed:{themePrimaryColor:function(){return this.$store.state.themePrimaryColor}},methods:{getHex:function(t){if(l["a"].isColor(t)){var e=window.getComputedStyle(document.documentElement).getPropertyValue("--vs-".concat(t));return e=e.split(","),"#"+((1<<24)+(Number(e[0])<<16)+(Number(e[1])<<8)+Number(e[2])).toString(16).slice(1)}return t},gradientToColor:function(t){var e={primary:"#A9A2F6",success:"#55DD92",warning:"#ffc085",danger:"#F97794"};return e[t]?e[t]:e["primary"]}},components:{VueApexCharts:i.a},created:function(){"area"==this.type?(this.chartOptions=Object.assign({},n.areaChartOptions),this.chartOptions["theme"]={monochrome:{enabled:!0,color:this.getHex(this.color),shadeTo:"light",shadeIntensity:.65}}):"line"==this.type&&(this.chartOptions=JSON.parse(JSON.stringify(n.lineChartOptions)),this.chartOptions.fill.gradient.gradientToColors=[this.gradientToColor(this.colorTo||this.color)],this.chartOptions.colors=[this.getHex(this.color)])}},c=d,h=o("2877"),p=Object(h["a"])(c,a,r,!1,null,null,null);e["a"]=p.exports},"5f88":function(t,e,o){"use strict";var a=function(t,e){var o=e._c;return o("vs-dropdown",{staticClass:"cursor-pointer",class:e.data.staticClass,attrs:{"vs-trigger-click":""}},[o("small",{staticClass:"flex cursor-pointer"},[o("span",[e._v("Last 7 days")]),o("feather-icon",{staticClass:"ml-1",attrs:{icon:"ChevronDownIcon",svgClasses:"h-4 w-4"}})],1),o("vs-dropdown-menu",{staticClass:"w-32"},[o("vs-dropdown-item",{on:{click:function(t){e.listeners.timeDurationChanged&&e.listeners.timeDurationChanged("last-28-days")}}},[e._v("Last 28 days")]),o("vs-dropdown-item",{on:{click:function(t){e.listeners.timeDurationChanged&&e.listeners.timeDurationChanged("last-month")}}},[e._v("Last Month")]),o("vs-dropdown-item",{on:{click:function(t){e.listeners.timeDurationChanged&&e.listeners.timeDurationChanged("last-year")}}},[e._v("Last Year")])],1)],1)},r=[],s=o("2877"),i={},n=Object(s["a"])(i,a,r,!0,null,null,null);e["a"]=n.exports},"6c7b":function(t,e,o){var a=o("5ca1");a(a.P,"Array",{fill:o("36bd")}),o("9c6c")("fill")},da24:function(t,e,o){"use strict";e["a"]={siteTraffic:{series:[{name:"Traffic Rate",data:[150,200,125,225,200,250]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{type:"line",dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1},toolbar:{show:!1},sparkline:{enabled:!0}},stroke:{width:5,curve:"smooth"},xaxis:{type:"numeric"},colors:["#7367F0"],fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#A9A2F6"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},tooltip:{x:{show:!1}}}},activeUsers:{series:[{name:"Active Users",data:[750,1e3,900,1250,1e3,1200,1100]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{type:"line",dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1},toolbar:{show:!1},sparkline:{enabled:!0}},stroke:{width:5,curve:"smooth"},xaxis:{type:"numeric"},colors:["#28C76F"],fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#55DD92"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,75,100,100]}},markers:{size:0,hover:{size:5}},tooltip:{x:{show:!1}}}},newsletter:{series:[{name:"Newsletter",data:[365,390,365,400,375,400]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{type:"line",dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1},toolbar:{show:!1},sparkline:{enabled:!0}},stroke:{width:5,curve:"smooth"},xaxis:{type:"numeric"},colors:["#FF9F43"],fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#ffc085"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,75,100,100]}},markers:{size:0,hover:{size:5}},tooltip:{x:{show:!1}}}},revenueComparisonLine:{chartOptions:{chart:{toolbar:{show:!1},dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1}},stroke:{curve:"smooth",dashArray:[0,8],width:[4,2]},grid:{borderColor:"#e7e7e7"},legend:{show:!1},colors:["#F97794","#b8c2cc"],fill:{type:"gradient",gradient:{shade:"dark",inverseColors:!1,gradientToColors:["#7367F0","#b8c2cc"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},xaxis:{labels:{style:{cssClass:"text-grey fill-current"}},axisTicks:{show:!1},categories:["01","05","09","13","17","21","26","31"],axisBorder:{show:!1}},yaxis:{tickAmount:5,labels:{style:{cssClass:"text-grey fill-current"},formatter:function(t){return t>999?(t/1e3).toFixed(1)+"k":t}}},tooltip:{x:{show:!1}}}},subscribersGained:{series:[{name:"Subscribers",data:[28,40,36,52,38,60,55]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{show:!1}}}},quarterlySales:{series:[{name:"Sales",data:[10,15,7,12,3,16]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{show:!1}}}},revenueGenerated:{series:[{name:"Revenue",data:[350,275,400,300,350,300,450]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{show:!1}}}},ordersRecevied:{series:[{name:"Orders",data:[10,15,8,15,7,12,8]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{show:!1}}}},salesBar:{chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{type:"bar",sparkline:{enabled:!0},toolbar:{show:!1}},states:{hover:{filter:"none"}},colors:["rgba(115,103,240,0.15)","rgba(115,103,240,0.15)","#7367f0","rgba(115,103,240,0.15)","rgba(115,103,240,0.15)","rgba(115,103,240,0.15)"],plotOptions:{bar:{columnWidth:"45%",distributed:!0,endingShape:"rounded"}},tooltip:{x:{show:!1}}}},goalOverviewRadialBar:{chartOptions:{plotOptions:{radialBar:{size:110,startAngle:-150,endAngle:150,hollow:{size:"77%"},track:{background:"#bfc5cc",strokeWidth:"50%"},dataLabels:{name:{show:!1},value:{offsetY:18,color:"#99a2ac",fontSize:"4rem"}}}},colors:["#00db89"],fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:["#00b5b5"],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{lineCap:"round"},chart:{sparkline:{enabled:!0},dropShadow:{enabled:!0,blur:3,left:1,top:1,opacity:.1}}}},supportTrackerRadialBar:{chartOptions:{plotOptions:{radialBar:{size:158,offsetY:-30,startAngle:-150,endAngle:150,hollow:{size:"65%"},track:{background:"rgba(0,0,0,0)",strokeWidth:"100%"},dataLabels:{value:{offsetY:30,color:"#99a2ac",fontSize:"2rem"}}}},colors:["#EA5455"],fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:["#7367F0"],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{dashArray:8},chart:{sparkline:{}},labels:["Completed Tickets"]}},statisticsRadar:{chartOptions:{labels:["Jan","Feb","Mar","Apr","May","Jun"],dataLabels:{style:{colors:["#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd"]}},yaxis:{show:!1},grid:{show:!1},legend:{show:!1},chart:{dropShadow:{enabled:!0,blur:8,left:1,top:1,opacity:.2},toolbar:{show:!1}},stroke:{width:0},colors:["#9f8ed7","#1edec5"],plotOptions:{radar:{polygons:{strokeColors:["#e8e8e8","transparent","transparent","transparent","transparent","transparent"],connectorColors:"transparent"}}},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#8e9ad6","#1fcadb"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0}}},sessionsByDeviceDonut:{chartOptions:{labels:["Desktop","Mobile","Tablet"],dataLabels:{enabled:!1},legend:{show:!1},chart:{offsetY:30,type:"donut",toolbar:{show:!1}},stroke:{width:0},colors:["#7961F9","#FF9F43","#EA5455"],fill:{type:"gradient",gradient:{gradientToColors:["#9c8cfc","#FFC085","#f29292"]}}}},productOrdersRadialBar:{chartOptions:{labels:["Finished","Pending","Rejected"],plotOptions:{radialBar:{size:165,offsetY:-5,hollow:{size:"20%"},track:{background:"#ebebeb",strokeWidth:"100%",margin:15},dataLabels:{show:!0,name:{fontSize:"18px"},value:{fontSize:"16px",color:"#636a71",offsetY:11},total:{show:!0,label:"Total",formatter:function(){return 42459}}}}},responsive:[{breakpoint:576,options:{plotOptions:{radialBar:{size:150,hollow:{size:"20%"},track:{background:"#ebebeb",strokeWidth:"100%",margin:15}}}}}],colors:["#7961F9","#FF9F43","#EA5455"],fill:{type:"gradient",gradient:{shade:"dark",type:"vertical",shadeIntensity:.5,gradientToColors:["#9c8cfc","#FFC085","#f29292"],inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{lineCap:"round"},chart:{height:355,dropShadow:{enabled:!0,blur:3,left:1,top:1,opacity:.1}}}},customersPie:{chartOptions:{labels:["New","Returning","Referrals"],dataLabels:{enabled:!1},legend:{show:!1},chart:{type:"pie",offsetY:0,dropShadow:{enabled:!1,blur:5,left:1,top:1,opacity:.2},toolbar:{show:!1}},stroke:{width:5},colors:["#7961F9","#FF9F43","#EA5455"],fill:{type:"gradient",gradient:{gradientToColors:["#9c8cfc","#FFC085","#f29292"]}}}},salesLine:{chartOptions:{chart:{toolbar:{show:!1},dropShadow:{enabled:!0,top:20,left:2,blur:6,opacity:.2}},stroke:{curve:"smooth",width:4},grid:{borderColor:"#ebebeb"},legend:{show:!1},colors:["#df87f2"],fill:{type:"gradient",gradient:{shade:"dark",inverseColors:!1,gradientToColors:["#7367F0"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},xaxis:{labels:{style:{cssClass:"text-grey fill-current"}},axisTicks:{show:!1},categories:["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"],axisBorder:{show:!1}},yaxis:{tickAmount:5,labels:{style:{cssClass:"text-grey fill-current"},formatter:function(t){return t>999?(t/1e3).toFixed(1)+"k":t}}},tooltip:{x:{show:!1}}}},clientRetentionBar:{chartOptions:{grid:{borderColor:"#ebebeb",padding:{left:0,right:0}},legend:{show:!1},dataLabels:{enabled:!1},chart:{stacked:!0,type:"bar",toolbar:{show:!1}},colors:["#7367F0","#EA5455"],plotOptions:{bar:{columnWidth:"10%"}},xaxis:{labels:{style:{cssClass:"text-grey fill-current"}},axisTicks:{show:!1},categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],axisBorder:{show:!1}},yaxis:{tickAmount:5,labels:{style:{cssClass:"text-grey fill-current"}}},tooltip:{x:{show:!1}}}},browserAnalytics:[{id:1,name:"Google Chrome",ratio:73,time:"Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)",comparedResult:"800"},{id:3,name:"Opera",ratio:8,time:"Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)",comparedResult:"-200"},{id:2,name:"Firefox",ratio:19,time:"Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)",comparedResult:"100"},{id:4,name:"Internet Explorer",ratio:27,time:"Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)",comparedResult:"-450"}]}}}]);
//# sourceMappingURL=chunk-1fb5f3bc.d3edf7fd.js.map