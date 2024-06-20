<template>
  <div class="content">
    <TableData :mydata="tableData" :mytotal="total" :myshuxing="tableColumns"></TableData>
  </div>
</template>

<script>
import TableData from '@/components/TableData.vue';
export default {
  components: { TableData, },
  data() {
    return {
      total: 1, // 初始化应为 0，这里只做演示效果使用
      tableData: [
      ],
      tableColumns: [
        { key: 'cw', name: '床位' },
        { key: 'zyh', name: '住院号' },
        { key: 'xb', name: '性别' },
        { key: 'nl', name: '年龄' },
        { key: 'xm', name: '姓名' },
        { key: 'sqks', name: '申请科室' },
        { key: 'ssks', name: '手术科室' },
        { key: 'ssys', name: '手术医生' },
        { key: 'yllz', name: '医疗组' },
        { key: 'ssmc', name: '手术名称' },
        { key: 'time', name: '安排时间' },
        { key: 'surgicalLeveal', name: '手术级别' },
        { key: 'surgicalType', name: '手术类别' },
        { key: 'room', name: '手术间' },
        { key: 'unitsNum', name: '台次' },
        { key: 'surgicalState', name: '手术状态' },
        { key: 'noticeTime', name: '通知时间' },
        { key: 'deliveryTime', name: '送出病区时间' },
        { key: 'arriveTime', name: '到达时间' },
        { key: 'enterTime', name: '进手术间' },
        { key: 'firstCheck', name: '首台签到' },
        { key: 'mianKnifeCheck', name: '主刀签到时间' },
        { key: 'anesthesiaTime', name: '麻醉开始时间' },
        { key: 'surgeryStartTime', name: '手术开始时间' },
        { key: 'surgeryEndTime', name: '手术结束时间' },
        { key: 'leaveRoomTime', name: '出手术间时间' },
        { key: 'leaveHouseTime', name: '出手术室时间' },
        { key: 'anesthesiaMethod', name: '麻醉方法' },
        { key: 'anesthesiaDoctor', name: '麻醉医生' },
      ]
    };
  },
  created() {
    this.getPageList();
  },
  methods: {
    async getPageList() {
      const result = await this.$axios.get("http://8.130.74.65:50051/table/getSSXXHZ");
      if (result.data) {
        this.tableData = result.data;
        this.total = result.data.length;
        // result.data[0]中获得到tableColumns
        // this.tableColumns = Object.keys(result.data[0]).map((item) => {
        //   return {
        //     key: item,
        //     name: item,
        //   };
        // });
        console.log(this.tableColumns);
      } else {
        this.$message.error("手术信息汇总表获取失败");
      }
    },
    // 路由跳转
    // changeView(url, queryParams) {
    //   this.$router.push({
    //     path: url,
    //     query: queryParams,
    //   });
    // },
  },
};
</script>

<style scoped>
.content {
  margin: 20px 0px;
}
</style>