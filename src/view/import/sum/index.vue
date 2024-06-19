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
          { key: "time", name: "床位" },
          { key: "surgicalLeveal", name: "surgicalLeveal" },
          { key: "surgicalType", name: "surgicalType" },
          { key: "room", name: "room" },
          { key: "unitsNum", name: "unitsNum" },
          { key: "surgicalState", name: "surgicalState" },
          { key: "noticeTime", name: "noticeTime" },
          { key: "deliveryTime", name: "deliveryTime" },
          { key: "arriveTime", name: "arriveTime" },
          { key: "enterTime", name: "enterTime" },
          {
            key: "firstCheck",
            name: "firstCheck"
          },
          {
            key: "mianKnifeCheck",
            name: "mianKnifeCheck"
          },
          {
            key: "anesthesiaTime",
            name: "anesthesiaTime"
          },
          {
            key: "surgeryStartTime",
            name: "surgeryStartTime"
          },
          {
            key: "surgeryEndTime",
            name: "surgeryEndTime"
          },
          {
            key: "leaveRoomTime",
            name: "leaveRoomTime"
          },
          {
            key: "leaveHouseTime",
            name: "leaveHouseTime"
          },
          {
            key: "anesthesiaMethod",
            name: "anesthesiaMethod"
          },
          {
            key: "anesthesiaDoctor",
            name: "anesthesiaDoctor"
          },
          {
            key: "ssys",
            name: "ssys"
          },
          {
            key: "zyh",
            name: "zyh"
          },
          {
            key: "ssmc",
            name: "ssmc"
          },
          {
            key: "cw",
            name: "cw"
          },
          {
            key: "xb",
            name: "xb"
          },
          {
            key: "nl",
            name: "nl"
          },
          {
            key: "xm",
            name: "xm"
          },
          {
            key: "sqks",
            name: "sqks"
          },
          {
            key: "ssks",
            name: "ssks"
          },
          {
            key: "yllz",
            name: "yllz"
          }
      ]
    };
  },
  created() {
    // 定时刷新
    setInterval(() => {
      this.getPageList();
    }, 1000);
  },
  methods: {
    async getPageList() {
      const result = await this.$axios.get("http://localhost:50051/table/getSSXXHZ");
      if (result.data) {
        this.tableData = result.data;
        this.total = result.data.length;
        // result.data[0]中获得到tableColumns
        this.tableColumns = Object.keys(result.data[0]).map((item) => {
          return {
            key: item,
            name: item,
          };
        });
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