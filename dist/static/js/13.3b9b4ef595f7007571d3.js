webpackJsonp([13],{QyGR:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Xxa5"),s=a.n(n),i=a("fZjL"),r=a.n(i),o=a("exGp"),l=a.n(o),m={components:{TableDataNew:a("SSws").a},data:function(){return{total:1,tableData:[{name:"wu",sex:1,nickname:"Star",mobile:"19999999999",state:0,stateName:"正常"}],tableColumns:[{key:"name",name:"姓名",minWidth:120},{key:"sex",name:"性别",minWidth:120},{key:"nickname",name:"昵称",minWidth:150},{key:"mobile",name:"手机号",minWidth:150},{key:"stateName",name:"状态",width:250}]}},created:function(){this.getPageList()},methods:{getPageList:function(){var t=this;return l()(s.a.mark(function e(){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("http://8.130.74.65:50051/table/getMZRGFY");case 2:(a=e.sent).data?(t.tableData=a.data,t.total=a.data.length,t.tableColumns=r()(a.data[0]).map(function(t){return{key:t,name:t}}),console.log(t.tableColumns)):t.$message.error("手术信息汇总表获取失败");case 4:case"end":return e.stop()}},e,t)}))()}}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("TableDataNew",{attrs:{mydata:this.tableData,mytotal:this.total,myshuxing:this.tableColumns}})],1)},staticRenderFns:[]};var c=a("VU/8")(m,u,!1,function(t){a("VguN")},"data-v-53213473",null);e.default=c.exports},VguN:function(t,e){}});