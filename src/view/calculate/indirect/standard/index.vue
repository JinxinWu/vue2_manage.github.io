<template>
  <div class="content">
    <TableDataNew :mydata="tableData" :mytotal="total" :myshuxing="tableColumns"></TableDataNew>
  </div>
</template>

<script>
import TableDataNew from '@/components/TableDataNew.vue';
export default {
  components: { TableDataNew, },
  data() {
    return {
      total: 1, // 初始化应为 0，这里只做演示效果使用
      tableData: [],
      tableColumns: [
        { key: 'ssj', name: '手术间' },
        { key: 'sbzj', name: '本月该手术间设备折旧费用' },
        { key: 'fwzj', name: '本月该手术间房屋折旧费用' },        
        { key: 'sdf', name: '本月该手术间水电费' },        
        { key: 'hj', name: '三项间接费用合计' },
        { key: 'dwsjbzcb', name: '单位时间标准成本' },
      ]
    };
  },
  created() {
    this.getPageList();
  },
  methods: {
    async getPageList() {
      const result = await this.$axios.get("http://8.130.74.65:50051/table/getGSSJDWSJBZCB");
      // console.log(result.data[0]);
      if (result.data) {
        this.tableData = result.data;
        // 遍历tableData数组
        this.tableData.forEach((item) => {
          item.fwzj = Number(item.fwzj).toFixed(2);
          item.sbzj = Number(item.sbzj).toFixed(2);
          item.sdf = Number(item.sdf).toFixed(2);
          item.hj = Number(item.hj).toFixed(2);
          item.dwsjbzcb = Number(item.dwsjbzcb).toFixed(2);
        });
        this.total = result.data.length;
        console.log(this.tableColumns);
      } else {
        this.$message.error("手术信息汇总表获取失败");
      }
    },
    // 路由跳转
    // changeView(url, queryParams) {
    //   this.$router.push({
    //     path: url,
    //     query: queryParams,
    //   });
    // },
  },
};
</script>

<style scoped>
.content {
  margin: 20px 0px;
}
</style>