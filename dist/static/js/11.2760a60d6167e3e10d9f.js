webpackJsonp([11],{QyGR:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Xxa5"),s=a.n(n),r=a("exGp"),o=a.n(r),i={components:{TableDataNew:a("SSws").a},data:function(){return{total:1,tableData:[],tableColumns:[{key:"zyh",name:"住院号"},{key:"ssmc",name:"手术名称"},{key:"mzys",name:"麻醉医生"},{key:"mzsj",name:"麻醉时间"},{key:"mzysgz",name:"麻醉医生工资"},{key:"mzysgs",name:"麻醉医生工时"},{key:"mzysfy",name:"麻醉医生费用"},{key:"mzhsfy",name:"麻醉护士费用"}]}},created:function(){this.getPageList()},methods:{getPageList:function(){var t=this;return o()(s.a.mark(function e(){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("http://8.130.74.65:50051/table/getMZRGFY");case 2:(a=e.sent).data?(t.tableData=a.data,t.total=a.data.length,console.log(t.tableColumns)):t.$message.error("手术信息汇总表获取失败");case 4:case"end":return e.stop()}},e,t)}))()}}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content"},[e("TableDataNew",{attrs:{mydata:this.tableData,mytotal:this.total,myshuxing:this.tableColumns}})],1)},staticRenderFns:[]};var l=a("VU/8")(i,c,!1,function(t){a("aGiu")},"data-v-7bc8ffa4",null);e.default=l.exports},aGiu:function(t,e){}});