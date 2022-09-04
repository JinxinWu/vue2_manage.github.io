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
      <span>我来啦!</span>
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
</style>