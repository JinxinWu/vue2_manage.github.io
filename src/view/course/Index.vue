<template>
  <div class="content">
    <el-card shadow="never">
      <!-- 查询 -->
      <el-row type="flex" justify="space-between">
        <el-form
          ref="searchForm"
          :model="searchForm"
          size="small"
          class="demo-form-inline"
          inline
        >
          <el-form-item label="课程名称:" prop="name">
            <el-input
              v-model.trim="searchForm.name"
              placeholder="请输入课程名称"
            />
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              icon="el-icon-search"
              size="small"
              :loading="searchLoading"
              @click="handleSearch()"
              >查询
            </el-button>
            <el-button
              size="small"
              icon="el-icon-refresh-right"
              @click="handleClear()"
              >重置</el-button
            >
          </el-form-item>
        </el-form>
      </el-row>
      <el-row class="rowSpace">
        <el-col :span="4">
          <el-button
            type="primary"
            size="small"
            @click="changeView('/course/add')"
            >新增课程</el-button
          ></el-col
        >
        <el-col :span="8">
          <div>
            <el-radio-group
              size="small"
              @change="changeRadio($event)"
              v-model="searchForm.state"
            >
              <el-radio-button label="">全部</el-radio-button>
              <el-radio-button label="0">已上架</el-radio-button>
              <el-radio-button label="1">已下架</el-radio-button>
            </el-radio-group>
          </div>
        </el-col>
      </el-row>
      <!-- 表格 -->
      <el-table ref="table" v-loading="searchLoading" :data="tableData" border>
        <el-table-column type="index" label="序号" width="50" />
        <el-table-column prop="name" label="课程名" show-overflow-tooltip />
        <el-table-column prop="code" label="课程编号" show-overflow-tooltip />
        <el-table-column prop="nickname" label="封面" show-overflow-tooltip />
        <el-table-column prop="mobile" label="讲师" show-overflow-tooltip />
        <el-table-column prop="stateName" label="状态" show-overflow-tooltip />
        <el-table-column label="操作" width="360">
          <template slot-scope="scope">
            <el-button
              type="success"
              size="small"
              @click="changeView('/course/update')"
              >编辑</el-button
            >
            <el-button
              type="danger"
              size="small"
              @click="deletecourse(scope.row.id)"
              >删除</el-button
            >
            <el-button
              type="warning"
              size="small"
              @click="deletecourse(scope.row.id)"
              >下架</el-button
            >
            <el-button
              type="primary"
              size="small"
              @click="deletecourse(scope.row.id)"
              >上架</el-button
            >
            <el-button size="small" @click="changeView('/course/detail')"
              >详情</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        class="pagination"
        layout="->,total, sizes, prev, pager, next, jumper"
        :page-sizes="[10, 20, 30, 40]"
        :current-page="searchForm.current"
        :page-size="searchForm.size"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchLoading: false,
      searchForm: {
        current: 1,
        size: 10,
        name: "",
        sex: "",
        state: "",
      },
      total: 0,
      tableData: [
        {
          name: "Vue电商管理系统",
          code: "ZF00100",
          sex: 1,
          nickname: "老师好我是知否君",
          mobile: "19999999999",
          stateName: "已上架",
        },
      ],
    };
  },
  created() {},
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
      this.$refs["searchForm"].resetFields();
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
    deletecourse(id) {
      this.$confirm("确认要删除该课程吗, 是否继续?", "提示", {
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
    changeView(url, queryParams) {
      console.log(url);
      this.$router.push({
        path: url,
        query: queryParams,
      });
    },
  },
};
</script>

<style scoped>
.content {
  margin: 20px 0px;
}

.el-table {
  margin: 20px 0px;
}
</style>