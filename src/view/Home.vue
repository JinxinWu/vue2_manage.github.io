<template>
  <div>
    <el-container class="home-container">
      <el-header>
        <el-row>
          <el-col :span="4">
            <p class="system-name">知否课堂后台管理系统</p>
          </el-col>
          <el-col :offset="18" :span="2">
            <el-avatar shape="square" :src="avatar" style="margin-top: 10px;"></el-avatar>
            <el-dropdown style="float:right;margin-top:20px">
              <span class="el-dropdown-link" style="color:#fff;cursor: pointer;">
                知否君 &nbsp;&nbsp;<i class="fa fa-caret-down fa-1x"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item>修改密码</el-dropdown-item>
                <el-dropdown-item>退出系统</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
      </el-header>
      <el-container style="overflow:auto;">
        <el-aside style="width: 200px"> 11213</el-aside>
        <el-container>
          <el-main>
            <!-- 主要内容 -->
            <router-view></router-view>
          </el-main>
          <el-footer>Copyright © 2022 知否技术</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      avatar: require("@/assets/img/avator.jpg"),
    };
  },
  created() { },
  mounted() {
    console.log(this.$route.query.name);
  },
  methods: {},
};
</script>

<style >
* {
  margin: 0;
  padding: 0;
}

.home-container {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  min-width: 1200px;
  background: #f2f3f5;
}

.el-header {
  background: #2661ef;
  padding: 0 10px;
  overflow: hidden;
}

.system-name {
  color: #fff;
  font-size: 18px;
  line-height: 60px;
}

.el-aside {
  background: green;
}

.el-main {}

.el-footer {
  color: #cccccc;
  text-align: center;
  line-height: 60px;
  font-size: 12px;
}

.el-footer:hover {
  color: #2661ef;
}
</style>