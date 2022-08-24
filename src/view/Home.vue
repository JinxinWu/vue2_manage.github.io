<template>
  <div>
    <el-container class="home-container">
      <!-- header -->
      <el-header>
        <el-row>
          <el-col :span="4">
            <p class="system-name">知否课堂后台管理系统</p>
          </el-col>
          <el-col :offset="12" :span="8" style="min-width:150px">
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
            <el-avatar shape="square" :src="avatar" style="margin:10px;float:right"></el-avatar>
          </el-col>
        </el-row>
      </el-header>

      <el-container style="overflow:auto;">
        <!-- 菜单 -->
        <el-aside>
          <div class="toggle-button" @click="isCollapse = !isCollapse">
            <i v-if="isCollapse" class="el-icon-s-unfold"></i>
            <i v-if="!isCollapse" class="el-icon-s-fold"></i>
          </div>
          <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
            @close="handleClose">
            <el-menu-item index="2">
              <i class="el-icon-house"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span>系统设置</span>
              </template>
              <el-menu-item index="1-4-1">权限管理</el-menu-item>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-user"></i>
              <span slot="title">用户管理</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-tickets"></i>
              <span slot="title">订单管理</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-notebook-1"></i>
              <span slot="title"> 课程管理</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-reading"></i>
              <span slot="title">文章管理</span>
            </el-menu-item>
          </el-menu>

        </el-aside>
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
      isCollapse: false,
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
  position: absolute;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 100%;
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
  background: white;
  width: auto !important;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-footer {
  color: #cccccc;
  text-align: center;
  line-height: 60px;
  font-size: 12px;
}

.el-footer:hover {
  color: #2661ef;
}

.toggle-button {
  background-color: #d9e0e7;
  font-size: 18px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
  color: black;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>