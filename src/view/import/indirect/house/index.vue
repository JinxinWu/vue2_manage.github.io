<template>
  <div class="content">
    <el-card shadow="never">
      <el-row>
        <!-- <el-col :offset="10" :span="4" style="margin-bottom: 20px;">
          <div style="font-size: 30px;">
            <span>房屋折旧</span>
          </div>
        </el-col> -->
        <el-col :offset="6" :span="10">
          <el-form ref="form" :model="form" label-width="180px">
            <el-form-item label="本月折旧总计">
              <el-input v-model="form.zhejiu" placeholder="请输入数值"></el-input>
            </el-form-item>
            <el-form-item label="总面积">
              <el-input v-model="form.areaSum" placeholder="请输入数值"></el-input>
            </el-form-item>
            <el-form-item label="手术间面积">
              <el-input v-model="form.area" placeholder="请输入数值"></el-input>
            </el-form-item>
            <el-form-item label="本月手术间房屋折旧总计">
              <el-input v-model="form.res" placeholder="等待计算" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">计算结果</el-button>
              <!-- <el-button>取消</el-button> -->
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "ele",
  components: {},
  data() {
    return {
      // form: {
      // zhejiu: null,
      // area: null,
      // areaSum: null,
      // res: null,
      // },
    };
  },
  computed: {
    form: {
      get() {
        return this.$store.state.houseForm;
      },
      set(value) {
        this.$store.commit("updateHouseForm", value);
      },
    },
  },
  created() { },
  methods: {
    onSubmit() {
      // 转换成数字计算
      this.form.res =
        (Number(this.form.zhejiu) * Number(this.form.area)) / Number(this.form.areaSum).toFixed(2);
      this.$axios({
        method: "post",
        url: "http://8.130.74.65:50051/money/FWZJ",
        headers: {
          "Content-Type": "application/json",
        },
        dataType: "json",
        data: JSON.stringify({
          BYZJZJ: this.form.zhejiu,
          ZMJ: this.form.area,
          SSJMJ: this.form.areaSum,
          // BYSSJFWZJZJ : 0.0,
          BYSSJFWZJZJ: this.form.res,
        }),
      }).then(
        (res) => {
          this.$message({
            showClose: true,
            message: '数据上传成功',
            type: 'success'
          });
          console.log(res.data);
        },
        (err) => {
          console.log(err);
        }
      );
    },
  },
};
</script>

<style scoped>
.content {
  margin: 20px 0px;
}

.el-table {
  margin: 20px 0px;
}
</style>