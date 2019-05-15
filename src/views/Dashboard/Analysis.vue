<template>
  <div>
    {{ $t("message")["app.dashboard.analysis.timeLabel"] }}:
    <a-date-picker></a-date-picker>

    <h3>Analysis</h3>
    <Chart :chartData="chartData" />
    <pre v-highlightjs="chartCode"><code class="html"></code></pre>
  </div>
</template>

<script>
import Chart from "../../components/Chart";
import request from "../../utils/request.js";
import chartCode from "!!raw-loader!../../components/Chart";
export default {
  data() {
    return {
      chartData: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 33, 59, 6, 37, 82.12344234],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      chartCode
    };
  },
  mounted() {
    this.getChartData();
    this.interval = setInterval(() => {
      this.getChartData();
    }, 3000);
  },
  methods: {
    getChartData() {
      request({
        method: "get",
        url: "/api/dashboard/chart",
        param: { ID: 12345 }
      }).then(response => {
        this.chartData.datasets[0].data = response.data;
        this.chartData = { ...this.chartData };
      });
    }
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  components: {
    Chart
  }
};
</script>

<style scoped>
h3 {
  margin-top: 20px;
}
</style>
