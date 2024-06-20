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
        { key: 'zdys', name: '主刀医生' },
        { key: 'shsj', name: '手术时间' },
        { key: 'zdysgz', name: '主刀医生工资' },
        { key: 'zdysgs', name: '主刀医生工时' },
        { key: 'zdysfy', name: '主刀医生费用' },
        { key: 'sqzbfy', name: '术前准备费用' },
        { key: 'fzysfy', name: '辅助医生费用' },
        { key: 'sssqthsfy', name: '手术室其他护士费用' },
      ]
    };
  },
  created() {
    this.getPageList();
  },
  methods: {
    async getPageList() {
      const result = await this.$axios.get("http://8.130.74.65:50051/table/getSSRGFY");
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