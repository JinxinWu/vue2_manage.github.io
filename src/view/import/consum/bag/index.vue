<template>
  <div class="content">
    <el-card shadow="never">
      <el-row>
        <!-- <el-col :offset="10" :span="4" style="margin-bottom: 20px;">
          <div style="font-size: 30px;">
            <span>手术包费用</span>
          </div>
        </el-col> -->
        <el-col :offset="6" :span="10">
          <el-form ref="form" :model="form" label-width="180px">
            <el-form-item label="手术包费用">
              <el-input v-model="form.cost" placeholder="请输入数值"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">上传数据</el-button>
              <!-- <el-button>取消</el-button> -->
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'   // 引入mapState
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
        return this.$store.state.bagForm;
      },
      set(value) {
        this.$store.commit('updateBagForm', value);
      }
    }
  },
  created() {
  },
  methods: {
    onSubmit() {
      // 转换成数字计算
      this.form.res = Number(this.form.zhejiu) * Number(this.form.area) / Number(this.form.areaSum);
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