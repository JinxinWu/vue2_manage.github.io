<template>
  <div class="content">
    <el-card shadow="never">
      <el-row>
        <el-col :offset="6" :span="10">
          <!-- <div style="margin-left: 126px; margin-bottom: 20px;">
            <span>1月份</span>
          </div> -->
          <el-form ref="form" :model="form" label-width="180px">
            <el-form-item label="本月水费总计">
              <el-input v-model="form.water" placeholder="请输入数值"></el-input>
            </el-form-item>
            <el-form-item label="本月电费总计">
              <el-input v-model="form.elec" placeholder="请输入数值"></el-input>
            </el-form-item>
            <el-form-item label="总面积">
              <el-input v-model="form.areaSum" placeholder="请输入数值"></el-input>
            </el-form-item>
            <el-form-item label="手术间面积">
              <el-input v-model="form.area" placeholder="请输入数值"></el-input>
            </el-form-item>
            <el-form-item label="本月手术间水电费总计">
              <el-input v-model="form.sum" placeholder="等待计算" :disabled="true"></el-input>
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
      //   water: null,
      //   elec: null,
      //   areaSum: null,
      //   area: null,
      //   sum: null,
      // },
    };
  },
  computed: {
    form: {
      get() {
        return this.$store.state.eleForm;
      },
      set(value) {
        this.$store.commit('updateEleForm', value);
      }
    }
  },
  created() {
  },
  methods: {
    onSubmit() {
      // 转换成数字计算
      this.form.sum = (Number(this.form.water) + Number(this.form.elec)) * Number(this.form.area) / Number(this.form.areaSum);
      this.$axios({
        method: "post",
        url: "http://8.130.74.65:50051/money/SDF",
        headers: {
          "Content-Type": "application/json",
        },
        dataType: "json",
        data: JSON.stringify({
          BYSFZJ: this.form.water,
          BYDFZJ: this.form.elec,
          ZMJ: this.form.areaSum,
          SSJMJ: this.form.area,
          BYSSJSDFZJ: this.form.sum,
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
    }
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