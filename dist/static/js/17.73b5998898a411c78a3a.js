webpackJsonp([17],{"3jzm":function(t,e){},"jwZ+":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});r("NYxO");var o={name:"ele",components:{},data:function(){return{}},computed:{form:{get:function(){return this.$store.state.bagForm},set:function(t){this.$store.commit("updateBagForm",t)}}},created:function(){},methods:{onSubmit:function(){this.form.res=Number(this.form.zhejiu)*Number(this.form.area)/Number(this.form.areaSum)}}},n={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("el-card",{attrs:{shadow:"never"}},[r("el-row",[r("el-col",{attrs:{offset:6,span:10}},[r("el-form",{ref:"form",attrs:{model:t.form,"label-width":"180px"}},[r("el-form-item",{attrs:{label:"手术包费用"}},[r("el-input",{attrs:{placeholder:"请输入数值"},model:{value:t.form.cost,callback:function(e){t.$set(t.form,"cost",e)},expression:"form.cost"}})],1),t._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("上传数据")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var a=r("VU/8")(o,n,!1,function(t){r("3jzm")},"data-v-52e92290",null);e.default=a.exports}});