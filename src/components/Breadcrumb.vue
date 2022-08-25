<template>
  <div class="content">
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="item in breadcrumbList"
        :key="'breadcrumb_' + item.path"
      >
        {{ item.meta.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    breadcrumbList() {
      if (this.$route.path === "/index") {
        return [this.$route.matched[0]];
      }
      return this.$route.matched;
    },
  },
};
</script>

<style scoped>
</style>