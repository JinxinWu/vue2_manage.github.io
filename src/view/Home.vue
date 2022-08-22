<template>
  <div>
    <el-container class="home-container">
      <el-header>12112</el-header>
      <el-container>
        <el-aside style="width: 200px"> 11213</el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {
    console.log(this.$route.query.name);
  },
  methods: {},
};
</script>

<style scoped>
.home-container {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
}
.el-header {
  background: rgba(37, 97, 239, 1);
}
.el-aside {
  width: 200px;
  background: green;
}
.el-main {
  background: #fff;
}
.el-footer {
  background: red;
}
</style>