<template>
  <div>
    <el-card shadow="never">
      <!-- Upload -->
      <el-button @click="dialogUploadVisible = true">导入excel表格</el-button>

      <el-dialog title="文件上传" :visible.sync="dialogUploadVisible">
        <div>
          <el-upload
            drag
            :limit="limitNum"
            :auto-upload="false"
            accept=".xlsx"
            :action="UploadUrl()"
            :before-upload="beforeUploadFile"
            :on-change="fileChange"
            :on-exceed="exceedFile"
            :on-success="handleSuccess"
            :on-error="handleError"
            :file-list="fileList"
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
              将文件拖到此处，或<em>点击上传</em>
            </div>
            <div class="el-upload__tip" slot="tip">
              只能上传xlsx文件，且不超过10M
            </div>
          </el-upload>
          <br />
          <el-button size="small" type="primary" @click="uploadFile"
            >立即上传</el-button
          >
          <el-button size="small">取消</el-button>
        </div>
      </el-dialog>
      <!-- 表格 -->
      <el-table ref="table" :data="tableDataShow" border>
        <el-table-column fixed type="index" label="序号" width="50" />
        <el-table-column
          v-for="item in tableColumns"
          :key="item.key"
          :prop="item.key"
          align="center"
          :formatter="formatter"
          :label="item.name"
        >
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
      limitNum: 1, // 上传excell时，同时允许上传的最大数
      fileList: [], // excel文件列表
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
  props: ["mydata", "mytotal", "myshuxing"],
  watch: {
    mydata: function (newVal, oldVal) {
      this.tableData = newVal;
      this.handleSizeChange(this.searchForm.size);
    },
    myshuxing: function (newVal, oldVal) {
      this.tableColumns = newVal;
    },
    mytotal: function (newVal, oldVal) {
      this.total = newVal;
    },
  },
  created() {},
  methods: {
    // 切换每页显示条数
    handleSizeChange(val) {
      this.searchForm.size = val;
      this.tableDataShow = this.tableData.slice(
        val * this.searchForm.current - this.searchForm.size,
        val * this.searchForm.current
      );
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