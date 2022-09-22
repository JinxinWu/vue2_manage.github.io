<template>
  <div>
    <el-upload
      ref="importUpload"
      class="import-upload"
      limit="1"
      accept=".png, .jpeg, .jpg "
      :file-list="uploadFileList"
      :before-remove="uploadFileBeforeRemove"
      :on-change="uploadFileHandleChange"
      :on-preview="handlePreview"
      :http-request="uploadListRequest"
    >
      <el-button size="small" icon="el-icon-upload el-icon--right"
        >上传文件</el-button
      >
      <div slot="tip" class="el-upload__tip">
        支持扩展名：.png .jpeg .jpg ，文件大小限制 10M。
      </div>
    </el-upload>
  </div>
</template>
  
  <script>
export default {
  name: "upload",
  props: ["uploadList"],
  data() {
    return {
      uploadFileList: [],
    };
  },
  created() {
    if (this.uploadList) {
      this.uploadFileList = this.uploadList;
    }
  },
  methods: {
    // 上传文件
    uploadListRequest(param) {
      const fd = new FormData();
      fd.append("file", param.file);
      const config = { header: { "Content-Type": "multipart/form-data;" } };
      this.$axios
        .post(url, fd, config)
        .then((res) => {
          if (res.data.success) {
            this.$emit("uploadFile", res.data.id);
            this.$message.success("文件上传成功!");
          } else {
            this.$message.error(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 删除文件
    uploadFileBeforeRemove(file, uploadFileList) {
      return new Promise((resolve, reject) => {
        this.$confirm(`确定删除 ${file.name}？`)
          .then(() => {
            if (file.id) {
              this.$axios
                .post(url, {
                  fileId: file.id,
                })
                .then((res) => {
                  if (res.data.success) {
                    this.$message.success("删除成功");
                    this.$emit("removeFile");
                    resolve();
                  } else {
                    this.$message.error(res.data.message);
                    reject();
                  }
                })
                .catch((err) => {
                  reject();
                  console.log(err);
                });
            } else {
              this.$message.success("删除成功");
              this.$emit("removeFile");
              resolve();
            }
          })
          .catch(() => {
            reject();
          });
      });
    },
    // 下载元素
    async handlePreview(file) {
      if (file.id) {
        const res = await this.$axios.get(url, {
          params: { fileId: file.id },
        });
        if (res.data.success) {
          const downloadElement = document.createElement("a");
          downloadElement.href = res.data.data;
          document.body.appendChild(downloadElement);
          downloadElement.click();
          document.body.removeChild(downloadElement);
        } else {
          this.$message.error(res.data.message);
        }
      }
    },
  },
};
</script>
  