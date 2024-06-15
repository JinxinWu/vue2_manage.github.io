<template>
  <div class="content">
    <el-card>
      <div class="basic-info">
        用户详情
        <el-button style="float: right" size="small" @click="$router.go(-1)">
          返回</el-button
        >
      </div>
      <el-divider></el-divider>
      <div style="text-align: center">
        <el-avatar
          :size="150"
          :src="require('../../assets/img/avator.jpg')"
        ></el-avatar>
        <h2 style="margin: 10px 0px">{{ userInfo.name ? "" : "wu" }}</h2>
        <span
          style="
            border-right: 2px solid #d2d2d2;
            padding-right: 10px;
            color: #999999;
          "
          >在学课程 {{ userInfo.courseNum ? userInfo.courseNum : "2" }}</span
        >
        <span style="padding-left: 5px; color: #999999"
          >已下订单
          {{ userInfo.courseOrder ? userInfo.courseOrder : "2" }}</span
        >
        <p style="margin-top: 10px">
          <el-tag size="small" style="background: #d9f6ee; color: #3dd4a7">
            <i class="fa fa-circle"></i>
            {{ userInfo.status ? userInfo.status : "正常" }}</el-tag
          >
        </p>
      </div>
    </el-card>
    <el-card class="rowStyle">
      <div class="basic-info">基础信息</div>
      <el-divider></el-divider>
      <el-descriptions class="margin-top" :column="3">
        <el-descriptions-item>
          <template slot="label"> 姓名 </template>
          {{ userInfo.name ? userInfo.name : "wu" }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"> 昵称 </template>
          {{ userInfo.nickName ? userInfo.nickName : "Star" }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"> 手机号 </template>
          {{ userInfo.mobile ? userInfo.mobile : 15736701918 }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"> 性别 </template>
          {{ userInfo.sex ? userInfo.sex : '男' }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"> 年龄 </template>
          {{ userInfo.age ? userInfo.age : 22 }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"> 联系地址 </template>
          {{ userInfo.address ? userInfo.address : '知否科学大道' }}
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"> 标签 </template>
          <el-tag size="mini" type="primary">java开发</el-tag>
          <el-tag size="mini" type="success">摄影</el-tag>
          <el-tag size="mini" type="danger">考研</el-tag>
        </el-descriptions-item>
      </el-descriptions>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        id: "",
      },
    };
  },
  created() {},
  methods: {
    async getUserDetail() {
      const result = await this.$axios.get("/user/detail", {
        params: { id: this.userInfo.id },
      });
      if (result.data.success) {
        Object.assign(this.userInfo, result.data.data);
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
.basic-info {
  border-left: 5px solid #2661ef;
  padding-left: 10px;
  font-weight: bold;
}
.rowStyle {
  margin-top: 10px;
}
.el-tag {
  margin-left: 5px;
}
</style>