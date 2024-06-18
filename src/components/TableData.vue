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
  props: ["mydata", "mytotal", "myshuxing", "urlAdd"],
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
      this.tableDataShow = this.tableData.slice(
        val * this.searchForm.size - this.searchForm.size,
        val * this.searchForm.size
      );
    },
    // 文件超出个数限制时的钩子
    exceedFile(files, fileList) {
      this.$message.warning(
        `只能选择 ${this.limitNum} 个文件，当前共选择了 ${
          files.length + fileList.length
        } 个`
      );
    },
    // 文件状态改变时的钩子
    fileChange(file, fileList) {
      // console.log(file.raw);
      this.fileList.push(file.raw);
      // console.log(this.fileList);
    },
    // 上传文件之前的钩子, 参数为上传的文件,若返回 false 或者返回 Promise 且被 reject，则停止上传
    beforeUploadFile(file) {
      // console.log("before upload");
      // console.log(file);
      let extension = file.name.substring(file.name.lastIndexOf(".") + 1);
      let size = file.size / 1024 / 1024;
      if (extension !== "xlsx") {
        this.$message.warning("只能上传后缀是.xlsx的文件");
      }
      if (size > 10) {
        this.$message.warning("文件大小不得超过10M");
      }
    },
    // 文件上传成功时的钩子
    handleSuccess(res, file, fileList) {
      this.$message.success("文件上传成功");
    },
    // 文件上传失败时的钩子
    handleError(err, file, fileList) {
      this.$message.error("文件上传失败");
    },
    UploadUrl: function () {
      // 因为action参数是必填项，我们使用二次确认进行文件上传时，直接填上传文件的url会因为没有参数导致api报404，所以这里将action设置为一个返回为空的方法就行，避免抛错
      return "";
    },
    uploadFile() {
      if (this.fileList.length === 0) {
        this.$message.warning("请上传文件");
      } else {
        // let form = new FormData();
        // form.append("file", this.fileList[0]);
        console.log(this.fileList[0]);
        this.$axios({
          method: "post",
          url: "http://localhost:50051/file/downTaxes",
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          data: {
            file: this.fileList[0],
            url: (this.urlAdd) ? this.$route.path + this.urlAdd : this.$route.path,
          },
        }).then(
          (res) => {},
          (err) => {
            console.log(err);
          }
        );
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
.el-table {
  margin: 20px 0px;
}
</style>