<template>
  <div>
    <el-card shadow="never">
      <!-- Upload -->
      <el-button @click="handleSizeChange(searchForm.size)">计算数据</el-button>

      <!-- 表格 -->
      <el-table ref="table" :data="tableDataShow" border>
        <el-table-column fixed label="序号" width="50">
          <template slot-scope="scope">
            {{ scope.$index + 1 + (searchForm.current - 1) * searchForm.size }}
          </template>
        </el-table-column>
        <el-table-column v-for="item in tableColumns" :key="item.key" :prop="item.key" align='center'
          :label="item.name">
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination class="pagination" layout="->,total, sizes, prev, pager, next, jumper"
        :page-sizes="[10, 20, 30, 40]" :current-page="searchForm.current" :page-size="searchForm.size" :total="total"
        @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchForm: {
        current: 1,
        size: 10,
      },
      total: this.mytotal, // 初始化应为 0，这里只做演示效果使用
      tableData: this.mydata,
      tableDataShow: [],
      tableColumns: this.myshuxing,
      dialogUploadVisible: false,
    };
  },
  props: ['mydata', 'mytotal', 'myshuxing'],
  watch: {
    mydata: function (newVal, oldVal) {
      this.tableData = newVal;
      // this.handleSizeChange(this.searchForm.size);
    },
    myshuxing: function (newVal, oldVal) {
      this.tableColumns = newVal;
    },
    mytotal: function (newVal, oldVal) {
      this.total = newVal;
    },
  },
  created() {
  },
  methods: {
    // 切换每页显示条数
    handleSizeChange(val) {
      this.searchForm.size = val;
      this.tableDataShow = this.tableData.slice((val * this.searchForm.current) - this.searchForm.size, val * this.searchForm.current);
    },
    // 点击某一页，跳转某一页
    handleCurrentChange(val) {
      this.searchForm.current = val;
      this.tableDataShow = this.tableData.slice((val * this.searchForm.size) - this.searchForm.size, val * this.searchForm.size);
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
.el-table {
  margin: 20px 0px;
}
</style>