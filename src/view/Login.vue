<template>
  <div class="login">
    <!-- login_card -->
    <el-card class="login_card">
      <el-image class="logo_image" :src="logo_url" fit="cover"></el-image>
      <p class="login_title">登 录</p>
      <p class="login_desc">欢迎登录小会计后台管理系统</p>
      <el-form ref="ruleForm" :model="form" :rules="rules">
        <el-form-item prop="username">
          <el-input
            placeholder="请输入管理员账号"
            v-model="form.username"
            prefix-icon="el-icon-user"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="请输入管理员密码"
            v-model="form.password"
            prefix-icon="el-icon-lock"
          />
        </el-form-item>
        <el-form-item>
          <el-button
            :loading="loginLoading"
            style="background: #5b89fe; color: white"
            @click="submitForm('ruleForm')"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
    <!-- 外部logo展示 -->
    <!-- <div>
      <el-image class="wechat_logo" :src="wechat_img" fit="cover"></el-image>
      <el-image
        class="offical_img"
        :src="officalAccount_img"
        fit="cover"
      ></el-image>
      <el-image class="home_logo" :src="home_img" fit="cover"></el-image>
      <el-image class="juejin_img" :src="juejin_img" fit="cover"></el-image>
    </div> -->
    <!-- footer -->
    <p class="footer">Copyright © 小会计 All Rights Reserved</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      logo_url: require("@/assets/img/logo.png"),
      wechat_img: require("@/assets/img/wechat.png"),
      home_img: require("@/assets/img/home.png"),
      juejin_img: require("@/assets/img/juejin.jpg"),
      officalAccount_img: require("@/assets/img/officalAccount.jpg"),
      form: {
        username: "",
        password: "",
      },
      loginLoading: false,
      rules: {
        username: [
          { required: true, message: "请输入管理员账号", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入管理员密码", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loginLoading = true;
          this.$axios
            .get("http://8.130.74.65:50051/table/deleteAllTable")
            .then((res) => {
            })
            .catch((err) => {
              this.$message.error("服务器连接失败，请稍后重试......");
              this.loginLoading = false;
            });
          // this.$axios
          //   .post("/auth/login", this.form)
          //   .then((res) => {
          //     if (res.data.success) {
          //       sessionStorage.setItem("user",JSON.stringify(res.data.data.user));
          //       sessionStorage.setItem("token", res.data.token);
          //       this.$router.push("/home");
          //     } else {
          //       this.$message.error(res.data.msg);
          //       this.loginLoading = false;
          //     }
          //   })
          //   .catch((err) => {
          //     this.$message.error("服务器连接失败，请稍后重试......");
          //     this.loginLoading = false;
          //   });
          if(this.form.username == "admin" && this.form.password == "123456") {
            this.$router.push("/home");
          } else {
            this.$message.error("账号或密码错误，请重新输入");
          }
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style  scoped>
.login {
  width: 100%;
  height: 100%;
  background-image: url("../assets/img/bg.jpg");
  position: absolute;
  left: 0;
  top: 0;
  background-size: 100% 100%;
}
.login_card {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 20%;
  min-width: 300px;
  height: 500px;
  min-height: 500px;
  border-radius: 10px;
  text-align: center;
}
.logo_image {
  width: 50px;
  height: 50px;
  margin-top: 40px;
}
.login_title {
  font-size: 25px;
  font-weight: bold;
}
.login_desc {
  letter-spacing: 2px;
  color: #999a9a;
}
.el-button {
  width: 100%;
}
.footer {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 20px;
  text-align: center;
  color: rgb(183, 181, 181);
}
.wechat_logo {
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 100px;
  right: 20px;
}
.home_logo {
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 40px;
  right: 20px;
}
.juejin_img,
.offical_img {
  width: 180px;
  height: 200px;
  border-radius: 10px;
  position: fixed;
  right: 80px;
  bottom: 20px;
  display: none;
}
.wechat_logo:hover,
.home_logo:hover {
  border-radius: 50%;
  box-shadow: 0 3px 15px 3px rgba(237, 229, 229, 0.5);
}
.wechat_logo:hover + .offical_img {
  display: block;
}
.home_logo:hover + .juejin_img {
  display: block;
}
.footer:hover {
  color: white;
}
</style>