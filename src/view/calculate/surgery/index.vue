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
      tableData: [
        {
          name: "唐三",
          sex: 1,
          nickname: "斗罗大陆唐三",
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
      const result = await this.$axios.get(url, {
        params: this.searchForm,
      });
      if (result.data.success) {
        this.tableData = result.data.data.records;
        this.total = result.data.data.total;
      } else {
        this.$message.error(result.data.message);
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