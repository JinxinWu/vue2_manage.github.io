<template>
  <div class="content">
    <el-tabs type="border-card">
      <el-tab-pane label="骨科医生排班表">
        <TableData :mydata="tableData_GK" :mytotal="total" :myshuxing="tableColumns_GK" urlAdd="GKYSPB"></TableData>
      </el-tab-pane>
      <el-tab-pane label="麻醉科排班表">
        <TableData :mydata="tableData_MZ" :mytotal="total" :myshuxing="tableColumns_MZ" urlAdd="MZKPB"></TableData>
      </el-tab-pane>
      <el-tab-pane label="手术室排班表">
        <TableData :mydata="tableData_SS" :mytotal="total" :myshuxing="tableColumns_SS" urlAdd="SSSPB"></TableData>
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
      { key: 'gh', name: '工号' },
        { key: 'xm', name: '姓名' },
        { key: 'a', name: '2024-01-01周一' },
        { key: 'b', name: '2024-01-02周二' },
        { key: 'c', name: '2024-01-03周三' },
        { key: 'd', name: '2024-01-04周四' },
        { key: 'e', name: '2024-01-05周五' },
        { key: 'f', name: '2024-01-06周六' },
        { key: 'g', name: '2024-01-07周日' },
        { key: 'h', name: '2024-01-08周一' },
        { key: 'i', name: '2024-01-09周二' },
        { key: 'j', name: '2024-01-10周三' },
        { key: 'k', name: '2024-01-11周四' },
        { key: 'l', name: '2024-01-12周五' },
        { key: 'm', name: '2024-01-13周六' },
        { key: 'n', name: '2024-01-14周日' },
        { key: 'o', name: '2024-01-15周一' },
        { key: 'p', name: '2024-01-16周二' },
        { key: 'q', name: '2024-01-17周三' },
        { key: 'r', name: '2024-01-18周四' },
        { key: 's', name: '2024-01-19周五' },
        { key: 't', name: '2024-01-20周六' },
        { key: 'u', name: '2024-01-21周日' },
        { key: 'v', name: '2024-01-22周一' },
        { key: 'w', name: '2024-01-23周二' },
        { key: 'x', name: '2024-01-24周三' },
        { key: 'y', name: '2024-01-25周四' },
        { key: 'z', name: '2024-01-26周五' },
        { key: 'aa', name: '2024-01-27周六' },
        { key: 'ab', name: '2024-01-28周日' },
        { key: 'ac', name: '2024-01-29周一' },
        { key: 'ad', name: '2024-01-30周二' },
        { key: 'ae', name: '2024-01-31周三' },
        { key: 'zss', name: '时数' },
      ],
      tableData_MZ: [ ],
      tableColumns_MZ: [
      { key: 'gh', name: '工号' },
        { key: 'xm', name: '姓名' },
        { key: 'a', name: '2024-01-01周一' },
        { key: 'b', name: '2024-01-02周二' },
        { key: 'c', name: '2024-01-03周三' },
        { key: 'd', name: '2024-01-04周四' },
        { key: 'e', name: '2024-01-05周五' },
        { key: 'f', name: '2024-01-06周六' },
        { key: 'g', name: '2024-01-07周日' },
        { key: 'h', name: '2024-01-08周一' },
        { key: 'i', name: '2024-01-09周二' },
        { key: 'j', name: '2024-01-10周三' },
        { key: 'k', name: '2024-01-11周四' },
        { key: 'l', name: '2024-01-12周五' },
        { key: 'm', name: '2024-01-13周六' },
        { key: 'n', name: '2024-01-14周日' },
        { key: 'o', name: '2024-01-15周一' },
        { key: 'p', name: '2024-01-16周二' },
        { key: 'q', name: '2024-01-17周三' },
        { key: 'r', name: '2024-01-18周四' },
        { key: 's', name: '2024-01-19周五' },
        { key: 't', name: '2024-01-20周六' },
        { key: 'u', name: '2024-01-21周日' },
        { key: 'v', name: '2024-01-22周一' },
        { key: 'w', name: '2024-01-23周二' },
        { key: 'x', name: '2024-01-24周三' },
        { key: 'y', name: '2024-01-25周四' },
        { key: 'z', name: '2024-01-26周五' },
        { key: 'aa', name: '2024-01-27周六' },
        { key: 'ab', name: '2024-01-28周日' },
        { key: 'ac', name: '2024-01-29周一' },
        { key: 'ad', name: '2024-01-30周二' },
        { key: 'ae', name: '2024-01-31周三' },
        { key: 'zss', name: '时数' },
      ],
      tableData_SS: [ ],
      tableColumns_SS: [
      { key: 'gh', name: '工号' },
        { key: 'xm', name: '姓名' },
        { key: 'a', name: '2024-01-01周一' },
        { key: 'b', name: '2024-01-02周二' },
        { key: 'c', name: '2024-01-03周三' },
        { key: 'd', name: '2024-01-04周四' },
        { key: 'e', name: '2024-01-05周五' },
        { key: 'f', name: '2024-01-06周六' },
        { key: 'g', name: '2024-01-07周日' },
        { key: 'h', name: '2024-01-08周一' },
        { key: 'i', name: '2024-01-09周二' },
        { key: 'j', name: '2024-01-10周三' },
        { key: 'k', name: '2024-01-11周四' },
        { key: 'l', name: '2024-01-12周五' },
        { key: 'm', name: '2024-01-13周六' },
        { key: 'n', name: '2024-01-14周日' },
        { key: 'o', name: '2024-01-15周一' },
        { key: 'p', name: '2024-01-16周二' },
        { key: 'q', name: '2024-01-17周三' },
        { key: 'r', name: '2024-01-18周四' },
        { key: 's', name: '2024-01-19周五' },
        { key: 't', name: '2024-01-20周六' },
        { key: 'u', name: '2024-01-21周日' },
        { key: 'v', name: '2024-01-22周一' },
        { key: 'w', name: '2024-01-23周二' },
        { key: 'x', name: '2024-01-24周三' },
        { key: 'y', name: '2024-01-25周四' },
        { key: 'z', name: '2024-01-26周五' },
        { key: 'aa', name: '2024-01-27周六' },
        { key: 'ab', name: '2024-01-28周日' },
        { key: 'ac', name: '2024-01-29周一' },
        { key: 'ad', name: '2024-01-30周二' },
        { key: 'ae', name: '2024-01-31周三' },
        { key: 'zss', name: '时数' },
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
      const result = await this.$axios.get("http://8.130.74.65:50051/table/getGKYSPB");
      console.log(result.data[0]);
      if (result.data) {
        this.tableData_GK = result.data;
        this.total = result.data.length;
        // result.data[0]中获得到tableColumns
        // this.tableColumns_GK = Object.keys(result.data[0]).map((item) => {
        //   return {
        //     key: item,
        //     name: item,
        //   };
        // });
        // console.log(this.tableColumns);
      } else {
        this.$message.error("手术信息汇总表获取失败");
      }
    },
    async getPageList_MZ() {
      const result = await this.$axios.get("http://8.130.74.65:50051/table/getMZKPB");
      console.log(result.data[0]);
      if (result.data) {
        this.tableData_MZ = result.data;
        this.total = result.data.length;
        // result.data[0]中获得到tableColumns
        // this.tableColumns_MZ = Object.keys(result.data[0]).map((item) => {
        //   return {
        //     key: item,
        //     name: item,
        //   };
        // });
        // console.log(this.tableColumns);
      } else {
        this.$message.error("手术信息汇总表获取失败");
      }
    },
    async getPageList_SS() {
      const result = await this.$axios.get("http://8.130.74.65:50051/table/getSSSPB");
      console.log(result.data[0]);
      if (result.data) {
        this.tableData_SS = result.data;
        this.total = result.data.length;
        // result.data[0]中获得到tableColumns
        // this.tableColumns_SS = Object.keys(result.data[0]).map((item) => {
        //   return {
        //     key: item,
        //     name: item,
        //   };
        // });
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