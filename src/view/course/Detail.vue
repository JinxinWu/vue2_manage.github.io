<template>
  <div class="content">
    <el-drawer
      title="课程详情"
      :visible.sync="drawer"
      :before-close="handleClose"
      :wrapperClosable="false"
      size="40%"
    >
      <!-- 讲师介绍 -->
      <el-card class="course_info">
        <el-row type="flex" justify="space-between">
          <el-col :span="6">
            <el-avatar
              style="width: 80px; height: 80px; margin-top: 25px"
              :src="require('../../assets/img/avator.jpg')"
            ></el-avatar>
          </el-col>
          <el-col :span="18">
            <h3>
              {{ formData.lecturer ? formData.lecturer : "知否君" }}
              <i
                style="color: #67c23a; font-size: 25px"
                class="el-icon-success"
              ></i>
            </h3>
            <p class="lecturer_desc">
              {{
                formData.lecturerDesc
                  ? formData.lecturerDesc
                  : "十年一线大厂经验，中科院研究院技术专家，全栈开发。"
              }}
            </p>
            <p class="lecturer_desc">
              {{ formData.fans ? formData.fans : 666888 }} 粉丝
            </p>
          </el-col>
        </el-row>
      </el-card>
      <!-- 课程封面 -->
      <div style="width: 96%; margin: 0px auto">
        <el-image
          :src="require('../../assets/img/courseurl.jpg')"
          fit="contain"
        />
      </div>
      <!-- 课程介绍 -->
      <el-card class="course_info">
        <p>
          本课程从基础的 Vue
          源码构建开始讲起，包括数据驱动，响应式原理，让大家深入全面理解Vue的实现原理，掌握源码分析技巧，牢固对Vue的使用。
        </p>
      </el-card>
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      formData: {
        id: "",
        lecturer: "",
        lecturerDesc: "",
        fans: "",
      },
    };
  },
  methods: {
    async getCourseDetail() {
      const result = await this.$axios.get("/course/detail", {
        params: { id: this.formData.id },
      });
      if (result.data.success) {
        Object.assign(this.formData, result.data.data);
      } else {
        this.$message.error(result.data.message);
      }
    },
    handleClose() {
      this.drawer = false;
    },
  },
};
</script>

<style scoped>
.course_info {
  margin: 0px 10px 10px;
}
.lecturer_desc {
  color: gray;
  font-size: 14px;
}
</style>