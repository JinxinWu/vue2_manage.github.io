<template>
  <div class="content">
    <el-card shadow="never">
      <!-- 查询 -->
      <el-row type="flex" justify="space-between">
        <el-form
          ref="searchForm"
          :model="searchForm"
          size="small"
          class="demo-form-inline"
          inline
        >
          <el-form-item label="用户名称:" prop="name">
            <el-input
              v-model.trim="searchForm.name"
              placeholder="请输入用户名称"
            />
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              icon="el-icon-search"
              size="small"
              :loading="searchLoading"
              @click="handleSearch()"
              >查询
            </el-button>
            <el-button
              size="small"
              icon="el-icon-refresh-right"
              @click="handleClear()"
              >重置</el-button
            >
          </el-form-item>
        </el-form>
      </el-row>
      <el-row class="rowSpace">
        <el-col :span="3">
          <div>
            <el-button
              type="primary"
              size="small"
              @click="
                changeView(
                  '/purchaseManage/consolePlatform/purchaseApplyExpertAdd',
                  { hjbh: hjbh }
                )
              "
            >
              新增用户</el-button
            >
          </div>
        </el-col>
        <el-col :span="13">
          <div>
            <el-radio-group
              size="small"
              @change="changeRadio($event)"
              v-model="searchForm.state"
            >
              <el-radio-button label="">全部</el-radio-button>
              <el-radio-button label="0">编辑中</el-radio-button>
              <el-radio-button label="1">待审核</el-radio-button>
              <el-radio-button label="2">已审核</el-radio-button>
              <el-radio-button label="4">已抽取</el-radio-button>
            </el-radio-group>
          </div>
        </el-col>
      </el-row>
      <!-- 表格 -->
      <el-table ref="table" v-loading="searchLoading" :data="tableData" border>
        <el-table-column
          prop="name"
          label="评委会名称"
          width="350"
          show-overflow-tooltip
        />
        <el-table-column prop="stateName" label="状态" show-overflow-tooltip />
        <el-table-column label="操作" width="330">
          <template slot-scope="scope"> </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        class="pagination"
        layout="->,total, sizes, prev, pager, next, jumper"
        :page-sizes="[10, 20, 30, 40]"
        :current-page="searchForm.current"
        :page-size="searchForm.size"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchForm: {
        current: 1,
        size: 10,
        name: "",
        state: "0",
      },
      total: 0,
      tableData: [],
    };
  },
  created() {},
  methods: {},
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