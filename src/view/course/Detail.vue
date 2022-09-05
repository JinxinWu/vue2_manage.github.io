<template>
  <div class="content">
    <el-drawer
      title="课程详情"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
      :wrapperClosable="false"
      size="40%"
    >
      <!-- 讲师介绍 -->
      <el-card class="course_info">
        <el-row type="flex" justify="space-between">
          <el-rol span="5">
            <el-avatar
              style="width: 80px; height: 80px; margin-top: 25px"
              :src="require('../../assets/img/avator.jpg')"
            ></el-avatar>
          </el-rol>
          <el-rol span="4">
            <h3>
              知否君
              <i
                style="color: #67c23a; font-size: 25px"
                class="el-icon-success"
              ></i>
            </h3>
            <p class="lecturer_desc">
              十年一线大厂经验，中科院研究院技术专家，全栈开发。
            </p>
            <p class="lecturer_desc">666888 粉丝</p>
          </el-rol>
          <el-rol span="4"></el-rol>
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
          本课程从基础的
          Vue 源码构建开始讲起，包括数据驱动，响应式原理，让大家深入全面理解Vue的实现原理，掌握源码分析技巧，牢固对Vue的使用。
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
    };
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