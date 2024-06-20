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
        { key: 'zzh', name: '住院号' },
        { key: 'ssmc', name: '手术名称' },
        { key: 'ssj', name: '手术间' },
        { key: 'sssj', name: '手术时间' },
        { key: 'dwsjbzcb', name: '单位时间标准成本' },
        { key: 'jjfyhj', name: '间接费用合计' },
      ]
    };
  },
  created() {
    this.getPageList();
  },
  methods: {
    async getPageList() {
      const result = await this.$axios.get("http://8.130.74.65:50051/table/getJJFY");
      // console.log(result.data[0]);
      if (result.data) {
        this.tableData = result.data;
        this.total = result.data.length;
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