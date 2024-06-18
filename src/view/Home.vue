<template>
  <div>
    <el-container class="home-container">
      <!-- header -->
      <el-header>
        <el-row>
          <el-col :span="4">
            <p class="system-name">小会计后台管理系统</p>
          </el-col>
          <el-col :offset="12" :span="8" style="min-width: 150px">
            <el-dropdown style="float: right; margin: 20px 10px">
              <span class="el-dropdown-link" style="color: #fff; cursor: pointer">
                小会计 &nbsp;&nbsp;<i class="fa fa-caret-down fa-1x"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="editPasswordDialog = true">修改密码</el-dropdown-item>
                <el-dropdown-item @click.native="logout()">退出系统</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-avatar shape="square" :src="avatar" style="margin: 10px; float: right"></el-avatar>
          </el-col>
        </el-row>
        <!-- 修改密码 dialog -->
        <el-dialog title="修改密码" :visible.sync="editPasswordDialog" width="30%" :before-close="closeEditPassword"
          :close-on-click-modal="false">
          <el-form ref="editPasswordForm" :rules="editPasswordRule" class="demo-form-inline" :model="editPasswordForm"
            label-width="90px">
            <el-form-item label="原密码:" prop="oldPassword">
              <el-input v-model="editPasswordForm.oldPassword" placeholder="请输入原密码" />
            </el-form-item>
            <el-form-item label="新密码:" prop="newPassword">
              <el-input v-model="editPasswordForm.newPassword" placeholder="请输入新密码" />
            </el-form-item>
            <el-form-item label="确认密码:" prop="confirmPassword">
              <el-input v-model="editPasswordForm.confirmPassword" placeholder="请确认密码" />
            </el-form-item>
            <el-form-item>
              <el-button size="small" @click="closeEditPassword()">取 消</el-button>
              <el-button size="small" type="primary" @click="editPassword()">保 存</el-button>
            </el-form-item>
          </el-form>
        </el-dialog>
      </el-header>

      <el-container style="overflow: auto">
        <!-- 菜单 -->
        <el-aside>
          <div class="toggle-button" @click="isCollapse = !isCollapse">
            <i v-if="isCollapse" class="el-icon-s-unfold"></i>
            <i v-if="!isCollapse" class="el-icon-s-fold"></i>
          </div>
          <el-menu router :default-active="activePath" class="el-menu-vertical-demo" :collapse="isCollapse" :default-openeds="open_list" >
            <el-menu-item index="/index" @click="saveActiveNav('/index')">
              <i class="el-icon-house"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-upload"></i>
                <span>数据导入</span>
              </template>
              <el-menu-item index="/import/sum">手术信息汇总表</el-menu-item>
              <el-submenu index="1-2">
                <span slot="title">卫生耗材</span>
                <el-menu-item index="/import/consum/bag">手术包</el-menu-item>
                <el-menu-item index="/import/consum/noch">不收费耗材</el-menu-item>
              </el-submenu>
              <el-submenu index="1-3">
                <span slot="title">人工费用</span>
                <el-menu-item index="/import/manual/salary">人员薪资表</el-menu-item>
                <el-menu-item index="/import/manual/schedule">人员排班表</el-menu-item>
              </el-submenu>
              <el-submenu index="1-4">
                <span slot="title">间接费用</span>
                <el-menu-item index="/import/indirect/zhejiu">设备折旧明细表</el-menu-item>
                <el-menu-item index="/import/indirect/device">手术间设备数量表</el-menu-item>
                <el-menu-item index="/import/indirect/house">房屋折旧表</el-menu-item>
                <el-menu-item index="/import/indirect/ele">水电费表</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-s-platform"></i>
                <span>成本计算</span>
              </template>
              <el-submenu index="2-1">
                <span slot="title">人工费用</span>
                <el-menu-item index="/calculate/manual/mazui">麻醉</el-menu-item>
                <el-menu-item index="/calculate/manual/surgery">手术</el-menu-item>
                <el-menu-item index="/calculate/manual/recovery">复苏</el-menu-item>
              </el-submenu>
              <el-menu-item index="/calculate/material">材料费用</el-menu-item>
              <el-submenu index="2-2">
                <span slot="title">间接费用</span>
                <el-menu-item index="/calculate/indirect/standard">各手术间单位时间标准成本</el-menu-item>
                <el-menu-item index="/calculate/indirect/cal">间接费用计算</el-menu-item>
              </el-submenu>
              <el-menu-item index="/calculate/sum">成本汇总</el-menu-item>
            </el-submenu>
            <!-- <el-menu-item index="/user/list" @click="saveActiveNav('/user/list')">
              <i class="el-icon-user"></i>
              <span slot="title">用户管理</span>
            </el-menu-item>
            <el-menu-item index="/course/list" @click="saveActiveNav('/course/list')">
              <i class="el-icon-notebook-1"></i>
              <span slot="title">课程管理</span>
            </el-menu-item> -->
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <!-- 面包屑 -->
            <Breadcrumb />
            <!-- 主要内容 -->
            <router-view></router-view>
          </el-main>
          <!-- <el-footer>Copyright © 2024 小会计技术</el-footer> -->
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Breadcrumb from "../components/Breadcrumb.vue";
export default {
  components: { Breadcrumb },
  data() {
    return {
      // 默认打开菜单
      open_list: ['1'],
      avatar: require("@/assets/img/avator.jpg"),
      isCollapse: false,
      // 被激活的链接地址,默认是首页
      activePath: "",
      editPasswordDialog: false,
      editPasswordForm: {
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      },
      editPasswordRule: {
        oldPassword: [
          { required: true, message: "请输入原密码", trigger: "blur" },
        ],
        newPassword: [
          { required: true, message: "请输入新密码", trigger: "blur" },
        ],
        confirmPassword: [
          { required: true, message: "请确认新密码", trigger: "blur" },
        ],
      },
    };
  },
  created() {
    this.activePath = sessionStorage.getItem("activePath")
      ? sessionStorage.getItem("activePath")
      : "/index";
  },
  methods: {
    // 保存链接的激活状态
    saveActiveNav(activePath) {
      sessionStorage.setItem("activePath", activePath);
      this.activePath = activePath;
    },
    // 修改密码
    editPassword() {
      this.$refs.editPasswordForm.validate(async (valid) => {
        if (!valid) return;
        if (this.editPasswordForm.newPassword != this.editPasswordForm.confirmPassword) {
          return this.$message.error("两次密码不正确，请重新输入！");
        }
        // 请求接口
        const { data: res } = await this.$axios.post(
          "/user/updatePasswordword",
          this.editPasswordForm
        );
        if (res.success) {
          this.$message.success("密码修改成功，请重新登录！");
          sessionStorage.clear();
          this.$router.push("/login");
        } else {
          return this.$message.error(res.msg);
        }
      });
    },
    // 取消关闭密码
    closeEditPassword() {
      this.editPasswordDialog = false;
      // 坑：resetFields 方法只能重置带有 props 属性的元素
      this.$refs.editPasswordForm.resetFields();
    },
    // 退出系统
    logout() {
      this.$confirm("确定要退出系统吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          // 清除缓存
          sessionStorage.clear();
          this.$router.push("/login");
        })
        .catch(() => {
          return false;
        });
    },
  },
};
</script>

<style scoped>
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

.el-menu-item.is-active {
  color: #fff !important;
  font-size: 15px;
  font-weight: bold;
  background-color: #2661ef !important;
  border-radius: 2px;
  height: 50px;
  line-height: 50px;
  box-sizing: border-box;
  margin: 2px 5px 0px 2px;
}
</style>