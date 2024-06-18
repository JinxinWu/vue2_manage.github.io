<template>
  <div class="content">
    <!-- 运营状况 -->
    <div class="main-info">
      <span style="margin: auto; font-size: xx-large;">欢迎来到小会计系统</span>
      <!-- <el-card class="info">
        <el-button type="primary" icon="el-icon-user-solid" circle />
        <h2 class="num-info">112356</h2>
        <p class="desc">总用户数</p>
      </el-card>
      <el-card class="info">
        <el-button type="success" icon="el-icon-s-data" circle />
        <h2 class="num-info">66789</h2>
        <p class="desc">总课程数</p>
      </el-card>
      <el-card class="info">
        <el-button type="danger" icon="el-icon-coin" circle />
        <h2 class="num-info">12457</h2>
        <p class="desc">总订单数</p>
      </el-card>
      <el-card class="info">
        <el-button type="warning" icon="el-icon-data-line" circle />
        <h2 class="num-info">998989.12</h2>
        <p class="desc">总收入</p>
      </el-card> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  created() {
  },
  methods: {

  },
  mounted() {
  },
};
</script>

<style scoped>
.content {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.main-info {
  flex: 1;
  display: flex;
  justify-content: space-around;
  background: white;
  min-width: 800px;
  border-radius: 8px;
}

.info {
  background: white;
  width: 18%;
  height: 60%;
  align-self: center;
  text-align: center;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}

.info .num-info {
  margin: 10px 0px;
}

.info .desc {
  font-size: 10px;
  color: gray;
}
</style>