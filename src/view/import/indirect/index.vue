<template>
  <div class="content">
    <el-card shadow="never">
      <!-- 查询 -->
      <el-row class="rowSpace">
        <el-col><el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="手术间">
              <el-input v-model="formInline.room" placeholder="手术间"></el-input>
            </el-form-item>
            <el-form-item label="手术设备名称">
              <el-input v-model="formInline.device" placeholder="手术设备名称"></el-input>
            </el-form-item>
            <el-form-item label="数量">
              <el-input v-model="formInline.amount" placeholder="数量"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onAdd">新增数据</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">提交数据</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <!-- 表格 -->
      <el-table ref="table" :data="tableData" border>
        <el-table-column type="index" label="序号" width="50" />
        <el-table-column prop="room" label="手术间" show-overflow-tooltip />
        <el-table-column prop="device" label="手术设备名称" show-overflow-tooltip />
        <el-table-column prop="amount" label="数量" show-overflow-tooltip />
        <el-table-column label="操作" width="360">
          <template slot-scope="scope">
            <el-button type="danger" size="small" @click="deletecourse(scope.row.id)">删除</el-button>
          </template>
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
  name: "courseManage",
  components: {},
  data() {
    return {
      // 表单增加数据
      formInline: {
        room: '',
        device: '',
        amount: '',
      },
      searchForm: {
        current: 1,
        size: 10,
        // name: "",
        // lecturer: "",
        // state: "",
      },
      total: 1, // 初始化应为 0，这里只做演示效果使用
      tableData: [
        // {
        //   id: 123123,
        //   room: "抽丝剥茧Vue源码",
        //   device: "ZF00100",
        //   amount: "知否君",
        // },
      ],
    };
  },
  created() {
    // 初始化表格数据
    // this.getPageList();
  },
  methods: {
    async getPageList() {
      const result = await this.$axios.get('/course/list', {
        params: this.searchForm,
      });
      if (result.data.success) {
        this.tableData = result.data.data.records;
        this.total = result.data.data.total;
      } else {
        this.$message.error(result.data.message);
      }
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
    // 新增数据
    onAdd() {
      this.tableData.push({
        id: 123123,
        room: this.formInline.room,
        device: this.formInline.device,
        amount: this.formInline.amount,
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

.el-form-item {
  margin-bottom: 0;
}
</style>