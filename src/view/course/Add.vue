<template>
  <div class="content">
    <el-card>
      <el-form ref="form" :model="form" :rules="rules" label-width="100px">
        <el-form-item label="课程名称:" prop="name">
          <el-input v-model="form.name" placeholder="请输入课程名称"></el-input>
        </el-form-item>
        <el-form-item label="课程分类:" prop="category">
          <el-cascader
            placeholder="请选择课程分类"
            style="width: 440px"
            v-model="form.category"
            :options="categoryList"
            @change="handleChange"
            :props="cascaderProps"
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
        <el-form-item label="课程讲师:" prop="lecturer">
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
          <Upload
            ref="uploadFile"
            :upload-list="form.courseUrl"
            @uploadFile="uploadFile"
            @removeFile="removeFile"
          />
        </el-form-item>
        <el-form-item label="课程简介" prop="desc">
          <el-input
            style="width: 440px"
            maxlength="1000"
            show-word-limit
            type="textarea"
            v-model="form.desc"
            placeholder="请输入课程简介"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit('form')">保 存</el-button>
          <el-button @click="$router.go(-1)">取 消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import Upload from "../../components/Upload.vue";
export default {
  components: { Upload },
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
        courseUrl: "",
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
      cascaderProps:{
        value:'id',
        label:'name',
        children:'child'
      },
      rules: {
        name: [
          {
            required: true,
            message: "请输入课程名称",
            trigger: "blur",
          },
        ],
        category: [
          {
            required: true,
            message: "请选择课程分类",
            trigger: "change",
          },
        ],
        lecturer: [
          {
            required: true,
            message: "请选择课程分类",
            trigger: "change",
          },
        ],
        desc: [
          {
            required: true,
            message: "请输入课程简介",
            trigger: "blur",
          },
        ],
      },
    };
  },
  created() {
    // this.getCourseCategory();
    if (this.$route.query.id) {
      this.getCourseDetail();
    }
  },
  methods: {
    // 获取课程详情
    async getCourseDetail() {
      const { data: res } = await this.$axios.get(url, { params: { id: id } });
      if (res.success) {
        Object.assign(this.form, res.data);
      }
    },
    async getCourseCategory() {
      const result = await this.$axios.get("/course/getCategory");
      if (result.data.success) {
       this.categoryList = result.data.data;
      } else {
        this.$message.error(result.data.message);
      }
    },
    // 新增/编辑课程内容
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let url = this.form.id ? "/course/update" : "/course/save";
          this.$axios.post(url, this.form).then((res) => {
            if (res.data.success) {
              this.$message.success("保存成功！");
              this.$router.go(-1);
            } else {
              this.$message.error(res.data.msg);
            }
          });
        } else {
          return false;
        }
      });
    },
    // 上传文件
    uploadFile(file) {
      this.form.courseUrl.push(file);
    },
    // 删除文件
    removeFile(id) {
      let fileIds = this.form.courseUrl;
      var index = fileIds.findIndex((item) => {
        if (item.id == id) {
          return true;
        }
      });
      if (index != -1) {
        fileIds.splice(index, 1);
      }
    },
  },
};
</script>

<style scoped>
.el-input,
.el-select {
  width: 440px;
}
</style>``