<template>
  <div>
    <el-card shadow="never">
      <!-- Upload -->
      <el-button @click="dialogUploadVisible = true">导入excel表格</el-button>

      <el-dialog title="文件上传" :visible.sync="dialogUploadVisible">
        <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <!-- <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div> -->
        </el-upload>
      </el-dialog>
      <!-- 表格 -->
      <el-table ref="table" :data="tableData" border>
        <el-table-column type="index" label="序号" width="50" />
        <el-table-column v-for="item in tableColumns" :key="item.key" :prop="item.key" align='center'
          :formatter="formatter" :label="item.name" show-overflow-tooltip>
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
        name: "",
        sex: "",
        state: "",
      },
      total: this.mytotal, // 初始化应为 0，这里只做演示效果使用
      tableData: this.mydata,
      tableColumns: this.myshuxing,
      dialogUploadVisible: false,
    };
  },
  props: ['mydata', 'mytotal', 'myshuxing'],
  created() {
  },
  methods: {
    // 切换tab
    changeRadio(value) {
      this.searchForm.state = value;
      this.getPageList();
    },
    //搜索
    handleSearch() {
      this.searchForm.current = 1;
      this.getPageList();
    },
    //重置
    handleClear() {
      this.$refs.searchForm.resetFields();
      this.getPageList();
    },
    // 切换每页显示条数
    handleSizeChange(val) {
      this.searchForm.size = val;
      this.searchForm.current = 1;
      this.getPageList();
    },
    // 点击某一页，跳转某一页
    handleCurrentChange(val) {
      this.searchForm.current = val;
      this.getPageList();
    },
    // 删除
    deleteUser(id) {
      this.$confirm("确认要删除该用户吗, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          // 删除逻辑
          this.$axios
            .delete(url, {
              params: { id: id },
            })
            .then((res) => {
              if (res.data.success) {
                this.$message({ message: "删除成功！", type: "success" });
              } else {
                this.$message.error(res.data.message);
              }
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
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