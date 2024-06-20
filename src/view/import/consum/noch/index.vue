<template>
  <div class="content">
    <TableData :mydata="tableData" :mytotal="total" :myshuxing="tableColumns"></TableData>
  </div>
</template>

<script>
import TableData from "@/components/TableData.vue";
export default {
  components: { TableData },
  data() {
    return {
      total: 1, // 初始化应为 0，这里只做演示效果使用
      tableData: [],
      tableColumns: [
        { key: 'lqbm', name: '领用部门' },
        { key: 'ckdh', name: '出库单号' },
        { key: 'ckrq', name: '出库日期' },
        { key: 'sptbm', name: '省平台编码' },
        { key: 'wzbm', name: '物资编码' },
        { key: 'pckcxh', name: '批次库存序号' },
        { key: 'wzmc', name: '物资名称' },
        { key: 'ggxh', name: '规格型号' },
        { key: 'sl', name: '数量' },
        { key: 'dw', name: '单位' },
        { key: 'dj', name: '单价' },
        { key: 'je', name: '金额' },
        { key: 'ph', name: '批号' },
        { key: 'sxrq', name: '失效日期' },
        { key: 'bz', name: '备注' },
        { key: 'cwhslb', name: '财务核算类别' },
        { key: 'sfsf', name: '是否收费' },
      ],
    };
  },
  created() {
    this.getPageList();
  },
  methods: {
    async getPageList() {
      const result = await this.$axios.get("http://8.130.74.65:50051/table/getBSFHC");
      if (result.data) {
        this.tableData = result.data;
        this.total = result.data.length;
        // result.data[0]中获得到tableColumns
        // this.tableColumns = Object.keys(result.data[0]).map((item) => {
        //   return {
        //     key: item,
        //     name: item,
        //   };
        // });
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