<template>
  <div class="content">
    <el-card>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="课程名称:">
          <el-input v-model="form.name" placeholder="请输入课程名称"></el-input>
        </el-form-item>
        <el-form-item label="课程编号:">
          <el-input v-model="form.code" placeholder="课程编号自动生成"></el-input>
        </el-form-item>
        <el-form-item label="讲师:">
          <el-select v-model="form.lecturer" placeholder="请选择讲师">
            <el-option label="知否君" value="shanghai"></el-option>
            <el-option label="大熊" value="beijing"></el-option>
            <el-option label="夏洛" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="课程封面:">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">确 认</el-button>
          <el-button @click="$router.go(-1)">取 消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        code: "",
        lecturer: "",
      },
    };
  },
};
</script>

<style scoped>
.el-input,
.el-select {
  width: 440px;
}
</style>