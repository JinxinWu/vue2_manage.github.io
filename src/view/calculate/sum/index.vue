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
      tableData: [
        {
          zyh: "wu",
          ssmc: 1,
          ssj: "Star",
          clfy: "19999999999",
          rgfy: 0,
          jjfy: "正常",
          cbhj: "正常",
        },
      ],
      tableColumns: [
        { key: 'zyh', name: '住院号' },
        { key: 'ssmc', name: '手术名称' },
        { key: 'ssj', name: '手术间' },
        { key: 'clfy', name: '材料费用合计' },
        { key: 'rgfy', name: '人工费用合计' },
        { key: 'jjfy', name: '间接费用合计' },
        { key: 'cbhj', name: '成本合计' },
      ]
    };
  },
  created() {
    this.getPageList();
  },
  methods: {
    async getPageList() {
      const result = await this.$axios.get("http://8.130.74.65:50051/table/getCBHZ");
      // console.log(result.data[0]);
      if (result.data) {
        this.tableData = result.data;
        this.total = result.data.length;
        // 将tableData数组中的ssj和clfyhj转换为数字
        this.tableData.forEach((item) => {
          item.clfy = Number(item.clfy) + Number(this.$store.state.bagForm.cost);
          item.cbhj = Number(item.cbhj) + Number(this.$store.state.bagForm.cost);
        });
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