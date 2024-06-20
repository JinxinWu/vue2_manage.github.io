<template>
  <div class="content">
    <el-tabs type="border-card">
      <el-tab-pane label="骨科医生薪资表">
        <TableData :mydata="tableData_GK" :mytotal="total" :myshuxing="tableColumns_GK" urlAdd="GKYSXZ"></TableData>
      </el-tab-pane>
      <el-tab-pane label="麻醉科薪资表">
        <TableData :mydata="tableData_MZ" :mytotal="total" :myshuxing="tableColumns_MZ" urlAdd="MZKXZ"></TableData>
      </el-tab-pane>
      <el-tab-pane label="手术室薪资表">
        <TableData :mydata="tableData_SS" :mytotal="total" :myshuxing="tableColumns_SS" urlAdd="SSSXZ"></TableData>
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
      tableData_GK: [],

      tableColumns_GK: [
        { key: 'gh', name: '工号' },
        { key: 'zgxm', name: '职工姓名' },
        { key: 'zgxz', name: '职工性质' },
        { key: 'zglx', name: '职工类别' },
        { key: 'zc', name: '职称' },
        { key: 'zw', name: '职务' },
        { key: 'rsks', name: '人事科室' },
        { key: 'jx', name: '绩效' },
        { key: 'yfgz', name: '应发工资' },
        { key: 'dwwxej', name: '单位五险二金' },
        { key: 'rlcbhj', name: '人力成本合计' },
      ],
      tableData_MZ: [],
      tableColumns_MZ: [
        { key: 'gh', name: '工号' },
        { key: 'zgxm', name: '职工姓名' },
        { key: 'zgxz', name: '职工性质' },
        { key: 'zglb', name: '职工类别' },
        { key: 'zc', name: '职称' },
        { key: 'zw', name: '职务' },
        { key: 'rsks', name: '人事科室' },
        { key: 'jx', name: '绩效' },
        { key: 'yfgz', name: '应发工资' },
        { key: 'dwwxej', name: '单位五险二金' },
        { key: 'rlcbhj', name: '人力成本合计' },
      ],
      tableData_SS: [],
      tableColumns_SS: [
        { key: 'gh', name: '工号' },
        { key: 'zzxm', name: '职工姓名' },
        { key: 'zgxz', name: '职工性质' },
        { key: 'zglx', name: '职工类别' },
        { key: 'zc', name: '职称' },
        { key: 'zw', name: '职务' },
        { key: 'rsks', name: '人事科室' },
        { key: 'jx', name: '绩效' },
        { key: 'yfgz', name: '应发工资' },
        { key: 'dwwxej', name: '单位五险二金' },
        { key: 'rlcbhj', name: '人力成本合计' },
      ]
    };
  },
  created() {
    this.getPageList_GK();
    this.getPageList_MZ();
    this.getPageList_SS();
  },
  methods: {
    async getPageList_GK() {
      const result = await this.$axios.get("http://8.130.74.65:50051/table/getGKYSXZ");
      if (result.data) {
        this.tableData_GK = result.data;
        this.total = result.data.length;
        // 遍历tableData_SS的zw字段
        this.tableData_GK.forEach((item) => {
          if (item.zw == 0) {
            item.zw = "";
          }
        });
      } else {
        this.$message.error("手术信息汇总表获取失败");
      }
    },
    async getPageList_MZ() {
      const result = await this.$axios.get("http://8.130.74.65:50051/table/getMZKXZ");
      if (result.data) {
        this.tableData_MZ = result.data;
        this.total = result.data.length;
        // 遍历tableData_SS的zw字段
        this.tableData_MZ.forEach((item) => {
          if (item.zw == 0) {
            item.zw = "";
          }
        });
      } else {
        this.$message.error("手术信息汇总表获取失败");
      }
    },
    async getPageList_SS() {
      const result = await this.$axios.get("http://8.130.74.65:50051/table/getSSSXZ");
      if (result.data) {
        this.tableData_SS = result.data;
        // 遍历tableData_SS的zw字段
        this.tableData_SS.forEach((item) => {
          if (item.zw == 0) {
            item.zw = "";
          }
        });
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