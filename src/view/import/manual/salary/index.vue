<template>
  <div class="content">
    <el-tabs type="border-card">
      <el-tab-pane label="骨科医生薪资表">
        <TableData :mydata="tableData_GK" :mytotal="total" :myshuxing="tableColumns_GK"></TableData>
      </el-tab-pane>
      <el-tab-pane label="麻醉科薪资表">
        <TableData :mydata="tableData_MZ" :mytotal="total" :myshuxing="tableColumns_MZ"></TableData>
      </el-tab-pane>
      <el-tab-pane label="手术室薪资表">
        <TableData :mydata="tableData_SS" :mytotal="total" :myshuxing="tableColumns_SS"></TableData>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import TableData from '@/components/TableData.vue';
export default {
  components: { TableData, },
  data() {
    return {
      total: 1, // 初始化应为 0，这里只做演示效果使用
      tableData_GK: [ ],

      tableColumns_GK: [
        { key: 'name', name: '工号' },
        { key: 'sex', name: '职工姓名' },
        { key: 'nickname', name: '职工性质' },
        { key: 'mobile', name: '职工类别' },
        { key: 'mobile', name: '职称' },
        { key: 'mobile', name: '职务' },
        { key: 'mobile', name: '人事科室' },
        { key: 'mobile', name: '绩效' },
        { key: 'mobile', name: '应发工资' },
        { key: 'mobile', name: '单位五险二金' },
        { key: 'mobile', name: '人力成本合计' },
      ],
      tableData_MZ: [ ],
      tableColumns_MZ: [ ],
      tableData_SS: [ ],
      tableColumns_SS: [ ]
    };
  },
  created() {
    this.getPageList_GK();
    this.getPageList_MZ();
    this.getPageList_SS();
  },
  methods: {
    async getPageList_GK() {
      const result = await this.$axios.get("http://8.130.90.74:50051/table/getGKYSXZ");
      if (result.data) {
        this.tableData_GK = result.data;
        this.total = result.data.length;
        // result.data[0]中获得到tableColumns
        this.tableColumns_GK = Object.keys(result.data[0]).map((item) => {
          return {
            key: item,
            name: item,
          };
        });
        // console.log(this.tableColumns);
      } else {
        this.$message.error("手术信息汇总表获取失败");
      }
    },
    async getPageList_MZ() {
      const result = await this.$axios.get("http://8.130.90.74:50051/table/getMZKXZ");
      if (result.data) {
        this.tableData_MZ = result.data;
        this.total = result.data.length;
        // result.data[0]中获得到tableColumns
        this.tableColumns_MZ = Object.keys(result.data[0]).map((item) => {
          return {
            key: item,
            name: item,
          };
        });
        // console.log(this.tableColumns);
      } else {
        this.$message.error("手术信息汇总表获取失败");
      }
    },
    async getPageList_SS() {
      const result = await this.$axios.get("http://8.130.90.74:50051/table/getSSSXZ");
      console.log(result.data[0]);
      if (result.data) {
        this.tableData_SS = result.data;
        this.total = result.data.length;
        // result.data[0]中获得到tableColumns
        this.tableColumns_SS = Object.keys(result.data[0]).map((item) => {
          return {
            key: item,
            name: item,
          };
        });
        // console.log(this.tableColumns);
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