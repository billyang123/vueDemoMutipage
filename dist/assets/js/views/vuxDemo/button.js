webpackJsonp([1],{122:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(1),r=i(88),a=i.n(r);new n.a({render:function(t){return t(a.a)}}).$mount("#app")},125:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{gap:String}}},128:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=["-moz-box-","-webkit-box-",""];e.default={props:{span:[Number,String],order:[Number,String]},methods:{buildWidth:function(t){return"number"==typeof t?t<1?t:t/12:"string"==typeof t?t.replace("px","")/this.bodyWidth:void 0}},computed:{style:function(){var t={};if(t["horizontal"===this.$parent.orient?"marginLeft":"marginTop"]=this.$parent.gutter+"px",this.span)for(var e=0;e<n.length;e++)t[n[e]+"flex"]="0 0 "+100*this.buildWidth(this.span)+"%";return void 0!==this.order&&(t.order=this.order),t}},data:function(){return{bodyWidth:document.documentElement.offsetWidth}}}},129:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{gutter:{type:Number,default:8},orient:{type:String,default:"horizontal"},justify:String,align:String,wrap:String,direction:String},computed:{styles:function(){return{"justify-content":this.justify,"-webkit-justify-content":this.justify,"align-items":this.align,"-webkit-align-items":this.align,"flex-wrap":this.wrap,"-webkit-flex-wrap":this.wrap,"flex-direction":this.direction,"-webkit-flex-direction":this.direction}}}}},149:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=(i(2),i(17)),r=i.n(n),a=i(269),s=i.n(a),o=i(274),u=i.n(o),l=i(16),d=i.n(l),p=i(272),v=i.n(p),c=i(271),_=i.n(c),b=i(15),f=i.n(b),x=i(4),m=i.n(x);e.default={components:{XButton:r.a,Box:s.a,GroupTitle:u.a,Group:d.a,Flexbox:v.a,FlexboxItem:_.a,Divider:f.a,HbHead:m.a},data:function(){return{submit001:"click me",disable001:!1}},methods:{change:function(t){console.log("change:",t)},processButton001:function(){this.submit001="processing",this.disable001=!0}}}},17:function(t,e,i){i(21);var n=i(0)(i(18),i(22),null,null);t.exports=n.exports},18:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{type:{default:"default"},disabled:Boolean,mini:Boolean,plain:Boolean,text:String,actionType:String,showLoading:Boolean},computed:{classes:function(){return[{"weui-btn_disabled":this.disabled,"weui-btn_mini":this.mini},"weui-btn_"+this.type,this.plain?"weui-btn_plain-"+this.type:"",this.showLoading?"weui-btn_loading":""]}}}},196:function(t,e){},199:function(t,e){},206:function(t,e){},21:function(t,e){},22:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",{staticClass:"weui-btn",class:t.classes,attrs:{disabled:t.disabled,type:t.actionType}},[t.showLoading?i("i",{staticClass:"weui-loading"}):t._e(),t._t("default",[t._v(t._s(t.text))])],2)},staticRenderFns:[]}},239:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mainWarp"},[i("hb-head",{attrs:{headfont:"button按钮"}}),t._v(" "),i("divider",[t._v("default")]),t._v(" "),i("box",{attrs:{gap:"10px 10px"}},[i("x-button",[t._v("submit")]),t._v(" "),i("x-button",{attrs:{type:"primary"}},[t._v("primary")]),t._v(" "),i("x-button",{attrs:{type:"warn"}},[t._v("Delete")]),t._v(" "),i("divider",[t._v("action type")]),t._v(" "),i("x-button",{attrs:{type:"primary","action-type":"button"}},[t._v("submit")]),t._v(" "),i("x-button",{attrs:{type:"warn","action-type":"reset"}},[t._v("reset")]),t._v(" "),i("divider",[t._v("loading")]),t._v(" "),i("x-button",{attrs:{type:"default","show-loading":""}},[t._v("submit")]),t._v(" "),i("x-button",{attrs:{type:"primary","show-loading":""}},[t._v("submit")]),t._v(" "),i("x-button",{attrs:{type:"warn","show-loading":""}},[t._v("submit")]),t._v(" "),i("divider",[t._v("mini")]),t._v(" "),i("x-button",{attrs:{mini:""}},[t._v("submit")]),t._v(" "),i("x-button",{attrs:{mini:"",type:"primary"}},[t._v("primary")]),t._v(" "),i("x-button",{attrs:{mini:"",type:"warn"}},[t._v("Delete")]),t._v(" "),i("br"),t._v(" "),i("x-button",{attrs:{mini:"",plain:""}},[t._v("submit")]),t._v(" "),i("x-button",{attrs:{mini:"",plain:"",type:"primary"}},[t._v("primary")]),t._v(" "),i("divider",[t._v("plain")]),t._v(" "),i("x-button",{attrs:{plain:""}},[t._v("submit")]),t._v(" "),i("x-button",{attrs:{plain:"",type:"primary"}},[t._v("primary")]),t._v(" "),i("divider",[t._v("you can custom styles")]),t._v(" "),i("x-button",{staticStyle:{"border-radius":"99px"},attrs:{plain:"",type:"primary"}},[t._v("primary")]),t._v(" "),i("x-button",{staticClass:"custom-primary-red",attrs:{plain:"",type:"primary"}},[t._v("primary")]),t._v(" "),i("divider",[t._v("disabled")]),t._v(" "),i("x-button",{attrs:{disabled:""}},[t._v("disable submit")]),t._v(" "),i("x-button",{attrs:{type:"primary",disabled:""}},[t._v("disable primary")]),t._v(" "),i("x-button",{attrs:{type:"warn",disabled:""}},[t._v("disable Delete")]),t._v(" "),i("divider",[t._v("use :text and :disabled")]),t._v(" "),i("x-button",{attrs:{text:t.submit001,disabled:t.disable001,type:"primary"},nativeOn:{click:function(e){t.processButton001(e)}}}),t._v(" "),i("divider",[t._v("combined with flexbox")]),t._v(" "),i("flexbox",[i("flexbox-item",[i("x-button",{attrs:{type:"primary"}},[t._v("primary")])],1),t._v(" "),i("flexbox-item",[i("x-button",{attrs:{type:"warn"}},[t._v("Delete")])],1)],1),t._v(" "),i("divider",[t._v("combined with flexbox")]),t._v(" "),i("flexbox",[i("flexbox-item",[i("x-button",{attrs:{type:"default"}},[t._v("default")])],1),t._v(" "),i("flexbox-item",[i("x-button",{attrs:{type:"primary"}},[t._v("primary")])],1),t._v(" "),i("flexbox-item",[i("x-button",{attrs:{type:"warn"}},[t._v("Delete")])],1)],1)],1)],1)},staticRenderFns:[]}},242:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"weui-cells__title"},[t._t("default")],2)},staticRenderFns:[]}},248:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"vux-flexbox-item",style:t.style},[t._t("default")],2)},staticRenderFns:[]}},250:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"vux-flexbox",class:{"vux-flex-col":"vertical"===t.orient,"vux-flex-row":"horizontal"===t.orient},style:t.styles},[t._t("default")],2)},staticRenderFns:[]}},258:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{style:{margin:t.gap}},[t._t("default")],2)},staticRenderFns:[]}},269:function(t,e,i){var n=i(0)(i(125),i(258),null,null);t.exports=n.exports},271:function(t,e,i){var n=i(0)(i(128),i(248),null,null);t.exports=n.exports},272:function(t,e,i){i(206);var n=i(0)(i(129),i(250),null,null);t.exports=n.exports},274:function(t,e,i){i(199);var n=i(0)(null,i(242),null,null);t.exports=n.exports},88:function(t,e,i){i(196);var n=i(0)(i(149),i(239),null,null);t.exports=n.exports}},[122]);