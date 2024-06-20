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
        { key: 'zyh', name: '住院号' },
        { key: 'ssmc', name: '手术名称' },
        { key: 'fssj', name: '复苏时间' },
        { key: 'fsysfy', name: '复苏医生费用' },
        { key: 'fshsfy', name: '复苏护士费用' },
      ]
    };
  },
  created() {
    this.getPageList();
  },
  methods: {
    async getPageList() {
      const result = await this.$axios.get("http://8.130.74.65:50051/table/getFSRGFY");
      // console.log(result.data[0]);
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