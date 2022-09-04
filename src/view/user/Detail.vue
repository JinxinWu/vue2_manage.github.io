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
        <h2 style="margin: 10px 0px">{{ userInfo.name ? "" : "唐三" }}</h2>
        <span
          style="
            border-right: 2px solid #d2d2d2;
            padding-right: 10px;
            color: #999999;
          "
          >在学课程 2</span
        >
        <span style="padding-left: 5px; color: #999999">已下订单 22</span>
        <p style="margin-top: 10px">
          <el-tag size="small" style="background: #d9f6ee; color: #3dd4a7">
            <i class="fa fa-circle "></i> 正常</el-tag
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
          唐三
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"> 昵称 </template>
          斗罗大陆唐三
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"> 手机号 </template>
          19999999999
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"> 性别 </template>
          男
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"> 年龄 </template>
          22
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label"> 联系地址 </template>
          知否学堂科学大道
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
      userInfo: {},
    };
  },
  created() {},
  methods: {},
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