<template>
  <div class="content">
    <TableData :mydata="tableData" :mytotal="total" :myshuxing="tableColumns"></TableData>
  </div>
</template>

<script>
import TableData from '@/components/TableData.vue';
export default {
  components: { TableData, },
  data() {
    return {
      total: 1, // 初始化应为 0，这里只做演示效果使用
      tableData: [],
      tableColumns: [
        { key: 'syks', name: '使用科室' },
        { key: 'cpbh', name: '资产编码' },
        { key: 'cpmc', name: '资产名称' },
        { key: 'ggxh', name: '规格型号' },
        { key: 'dw', name: '单位' },
        { key: 'sl', name: '数量' },
        { key: 'yz', name: '原值' },
        { key: 'yzje', name: '月折旧额' },
        { key: 'ljzj', name: '累计折旧' },
        { key: 'jz', name: '净值' },
        { key: 'ycyf', name: '已折月份' },
        { key: 'grrq', name: '购入日期' },
        { key: 'qyrq', name: '启用日期' },
        { key: 'zjnx', name: '折旧年限' },
        { key: 'zt', name: '状态' },
      ]
    };
  },
  created() {
    this.getPageList();
  },
  methods: {
    async getPageList() {
      const result = await this.$axios.get("http://8.130.74.65:50051/table/getSBZJ");
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