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
          name: "wu",
          sex: 1,
          nickname: "Star",
          mobile: "19999999999",
          state: 0,
          stateName: "正常",
        },
      ],
      tableColumns: [
        { key: 'name', name: '姓名', minWidth: 120 },
        { key: 'sex', name: '性别', minWidth: 120 },
        { key: 'nickname', name: '昵称', minWidth: 150 },
        { key: 'mobile', name: '手机号', minWidth: 150 },
        { key: 'stateName', name: '状态', width: 250 },
      ]
    };
  },
  created() {
    this.getPageList();
  },
  methods: {
    async getPageList() {
      const result = await this.$axios.get("http://localhost:50051/table/getMZRGFY");
      // console.log(result.data[0]);
      if (result.data) {
        this.tableData = result.data;
        this.total = result.data.length;
        // result.data[0]中获得到tableColumns
        this.tableColumns = Object.keys(result.data[0]).map((item) => {
          return {
            key: item,
            name: item,
          };
        });
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