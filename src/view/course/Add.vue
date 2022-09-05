<template>
  <div class="content">
    <el-card>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="课程名称:">
          <el-input v-model="form.name" placeholder="请输入课程名称"></el-input>
        </el-form-item>
        <el-form-item label="课程分类:">
          <el-cascader
            style="width: 440px"
            v-model="form.category"
            :options="categoryList"
            @change="handleChange"
          ></el-cascader>
        </el-form-item>
        <el-form-item label="课程售价:">
          <el-input-number
            v-model="form.price"
            :min="1"
            :max="9999"
            :step="1"
            :precision="2"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="课程讲师:">
          <el-select v-model="form.lecturer" placeholder="请选择讲师">
            <el-option
              v-for="item in lecturerList"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
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
        <el-form-item label="课程简介">
          <el-input
            style="width: 440px"
            maxlength="1000"
            show-word-limit
            type="textarea"
            v-model="form.desc"
          ></el-input>
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
        id: "",
        name: "",
        code: "",
        lecturer: "",
        category: "",
        price: "",
        desc: "",
      },
      categoryList: [
        {
          value: "1001",
          label: "前端",
          children: [
            { value: "100101", label: "html5" },
            { value: "100102", label: "vue" },
            { value: "100103", label: "node" },
            { value: "100104", label: "react" },
            { value: "100105", label: "javascript" },
          ],
        },
        {
          value: "1002",
          label: "后端",
          children: [
            { value: "100201", label: "springboot" },
            { value: "100202", label: "微服务" },
            { value: "100203", label: "Redis" },
          ],
        },
        {
          value: "1003",
          label: "移动端",
          children: [
            { value: "100301", label: "iOS" },
            { value: "100302", label: "Android" },
            { value: "100303", label: "Flutter" },
          ],
        },
      ],
      lecturerList: [
        { id: 123123, name: "尤雨溪" },
        { id: 123124, name: "知否君" },
        { id: 123125, name: "工藤新一" },
      ],
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